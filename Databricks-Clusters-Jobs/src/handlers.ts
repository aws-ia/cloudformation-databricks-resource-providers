import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractDatabricksResource} from '../../Databricks-Common/src/abstract-databricks-resource'
import axios from "axios";
import {CaseTransformer, Transformer} from '../../Databricks-Common/src/util';

type AxiosPostResponse = {
    job_id: string
}

class Resource extends AbstractDatabricksResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel ): Promise<ResourceModel> {
        let data = {...(Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform())};

        this.loggerProxy.log(`!!!!!! CREATE data ${JSON.stringify(data)}`);

        const axiosResponse = await axios.post<AxiosPostResponse>(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/create`,
            data,
            {headers:{
                    "Authorization": `Bearer ${typeConfiguration.databricksAccess.token}`
                }});

        return new ResourceModel({"JobId": axiosResponse.data.job_id});
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/delete`,
            {"job_id": model.jobId},
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/get?job_id=${model.jobId}`,
            {
                headers: {
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token,
                    'Content-type': 'application/json'
                }
            });

        return new ResourceModel(Transformer.for(axiosResponse.data)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const axiosResponse = await axios.get(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/list`,
            {headers:{
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

        return new ResourceModel({...model, ...from});
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const axiosResponse = await axios.post(`https://${typeConfiguration.databricksAccess.databricksInstance}/api/2.1/jobs/update`,
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {headers:{
                    "Authorization": "Bearer " + typeConfiguration.databricksAccess.token
                }});

        return new ResourceModel({...model, "JobId": axiosResponse.data.job_id});
    }

}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;