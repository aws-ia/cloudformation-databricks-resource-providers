import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractDatabricksResource} from '../../Databricks-Common/src/abstract-databricks-resource'
import {RetryableCallbackContext} from '../../Databricks-Common/src/abstract-base-resource'
import axios from "axios";
import {CaseTransformer, Transformer} from '../../Databricks-Common/src/util';
import {DatabricksNotFoundError} from '../../Databricks-Common/src/types'
import {
    Action,
    exceptions,
    handlerEvent,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

import {version} from '../package.json';

type ClusterPayload = {
    cluster_id: string
    state: string
}

class Resource extends AbstractDatabricksResource<ResourceModel, ClusterPayload, ClusterPayload, void, TypeConfigurationModel> {
    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    maxRetries = 20;

    @handlerEvent(Action.Create)
    async createHandler(session: Optional<SessionProxy>, request: ResourceHandlerRequest<ResourceModel>, callbackContext: RetryableCallbackContext, logger: LoggerProxy, typeConfiguration: TypeConfigurationModel): Promise<ProgressEvent<ResourceModel, RetryableCallbackContext>> {
        const progressEvent = await super.createHandler(session, request, callbackContext, logger, typeConfiguration);

        // The create handler returns success when the cluster is GETable
        // But we need to check if it is actually running too.
        if (progressEvent.status==OperationStatus.Success && ["IN_PROGRESS", "PENDING"].includes(progressEvent.resourceModel.state)) {
            if (callbackContext.retry <= this.maxRetries) {
                let retry = callbackContext.retry ? callbackContext.retry + 1 : 1;
                let newProgressEvent = ProgressEvent.progress<ProgressEvent<ResourceModel, RetryableCallbackContext>>(progressEvent.resourceModel, {
                    retry: retry
                });
                newProgressEvent.callbackDelaySeconds = 5 * retry;
                return newProgressEvent;
            } else {
                throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.maxRetries} retries`);
            }
        }
        return progressEvent;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel ): Promise<ClusterPayload> {
        // this.loggerProxy.log(`CREATE ${model.clusterName} ${typeConfiguration}`);
        const axiosResponse = await axios.post<ClusterPayload>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/create`,
            {...(Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform())},
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": `Bearer ${typeConfiguration.databricksAccess.token}`
                }});

        return axiosResponse.data;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/permanent-delete`,
            {"cluster_id": model.clusterId},
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ClusterPayload> {
        const axiosResponse = await axios.get<ClusterPayload>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/get?cluster_id=${model.clusterId}`,
                {
                    headers: {
                        "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                        'Content-type': 'application/json',
                        'User-Agent': this.userAgent
                    }
                });

        if (Object.keys(axiosResponse.data).length === 0 || axiosResponse.data.state === "TERMINATED") {
            throw DatabricksNotFoundError;
        }

        return axiosResponse.data;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const axiosResponse = await axios.get<{clusters: ClusterPayload[]}>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/list`,
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                    'User-Agent': this.userAgent
                }});

        return axiosResponse.data.clusters
            .map((backendPayload) => {
                return new ResourceModel(Transformer.for(backendPayload)
                    .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                    .forModelIngestion()
                    .transform());
            }).filter((model: ResourceModel) => {
                return !["TERMINATED"].includes(model.state);
            })
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ClusterPayload | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        let resourceModel = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
        });
        delete resourceModel.applyPolicyDefaultValues;
        delete (<any>resourceModel).executors;
        delete (<any>resourceModel).sparkContextId;
        delete (<any>resourceModel).jdbcPort;
        delete (<any>resourceModel).diskSpec;

        return resourceModel;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/edit`,
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                    'User-Agent': this.userAgent
                }});
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
