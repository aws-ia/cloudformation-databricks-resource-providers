import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractDatabricksResource} from '../../Databricks-Common/src/abstract-databricks-resource'
import axios from "axios";
import {CaseTransformer, Transformer} from '../../Databricks-Common/src/util';
import {version} from '../package.json';

type AxiosPostResponse = {
    job_id: string
}

class Resource extends AbstractDatabricksResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel ): Promise<ResourceModel> {
        let data = {...(Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform())};

        const axiosResponse = await axios.post<AxiosPostResponse>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/create`,
            data,
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": `Bearer ${typeConfiguration.databricksAccess.token}`
                }});

        return new ResourceModel({"JobId": axiosResponse.data.job_id});
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/delete`,
            {"job_id": model.jobId},
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/get?job_id=${model.jobId}`,
            {
                headers: {
                    'User-Agent': this.userAgent,
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                    'Content-type': 'application/json'
                }
            });

        const res = new ResourceModel(Transformer.for(axiosResponse.data)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
 
        return res;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/list`,
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});

        return axiosResponse.data.jobs
            .map((backendPayload: any) => {
                return new ResourceModel(Transformer.for(backendPayload)
                    .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                    .forModelIngestion()
                    .transform());
            })
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
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
        return resourceModel;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/update`,
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {headers:{
                    'User-Agent': this.userAgent,
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});

        return new ResourceModel({...model, "JobId": axiosResponse.data.job_id});
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
