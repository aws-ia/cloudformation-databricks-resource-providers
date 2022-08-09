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

type AxiosPostResponse = {
    cluster_id: string
}

class Resource extends AbstractDatabricksResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

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

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel ): Promise<ResourceModel> {
        this.loggerProxy.log(`CREATE ${model.clusterName} ${typeConfiguration}`);
        const axiosResponse = await axios.post<AxiosPostResponse>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/create`,
            {...(Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform())},
            {headers:{
                    "Authorization": `Bearer ${typeConfiguration.databricksAccess.token}`
                }});


        return new ResourceModel({"ClusterId": axiosResponse.data.cluster_id});
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/delete`,
            {"cluster_id": model.clusterId},
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/get?cluster_id=${model.clusterId}`,
                {
                    headers: {
                        "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                        'Content-type': 'application/json'
                    }
                });

        const resourceModel = new ResourceModel(Transformer.for(axiosResponse.data)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());

        if (Object.keys(resourceModel).length === 0 || resourceModel.state === "TERMINATED") {
            throw DatabricksNotFoundError;
        }

        return resourceModel;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/list`,
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});

        return axiosResponse.data.clusters
            .map((backendPayload: any) => {
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

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }

        return new ResourceModel({...model, ...from});
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.0/clusters/edit`,
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});

        return new ResourceModel({...model, "ClusterId": axiosResponse.data.cluster_id});
    }
}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
