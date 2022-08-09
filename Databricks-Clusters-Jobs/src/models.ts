// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Databricks::Clusters::Jobs';

    @Exclude()
    protected readonly IDENTIFIER_KEY_JOBID: string = '/properties/JobId';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Tags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'tags', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    tags?: Optional<Map<string, object>>;
    @Expose({ name: 'Tasks' })
    @Type(() => Task)
    tasks?: Optional<Array<Task>>;
    @Expose({ name: 'EmailNotifications' })
    @Type(() => EmailNotifications)
    emailNotifications?: Optional<EmailNotifications>;
    @Expose({ name: 'TimeoutSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeoutSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeoutSeconds?: Optional<integer>;
    @Expose({ name: 'Schedule' })
    @Type(() => Schedule)
    schedule?: Optional<Schedule>;
    @Expose({ name: 'MaxConcurrentRuns' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxConcurrentRuns', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxConcurrentRuns?: Optional<integer>;
    @Expose({ name: 'Format' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'format', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    format?: Optional<string>;
    @Expose({ name: 'AccessControlList' })
    @Type(() => AccessUser)
    accessControlList?: Optional<Array<AccessUser>>;
    @Expose({ name: 'ExistingClusterId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'existingClusterId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    existingClusterId?: Optional<string>;
    @Expose({ name: 'JobId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'jobId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    jobId?: Optional<integer>;
    @Expose({ name: 'CreatedTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'createdTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdTime?: Optional<integer>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.jobId != null) {
            identifier[this.IDENTIFIER_KEY_JOBID] = this.jobId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Task extends BaseModel {
    ['constructor']: typeof Task;


    @Expose({ name: 'TaskKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'taskKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    taskKey?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'DependsOn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dependsOn', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    dependsOn?: Optional<Array<string>>;
    @Expose({ name: 'ExistingClusterId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'existingClusterId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    existingClusterId?: Optional<string>;
    @Expose({ name: 'NotebookTask' })
    @Type(() => NotebookTask)
    notebookTask?: Optional<NotebookTask>;
    @Expose({ name: 'SparkJarTask' })
    @Type(() => SparkJarTask)
    sparkJarTask?: Optional<SparkJarTask>;
    @Expose({ name: 'SparkPythonTask' })
    @Type(() => SparkPythonTask)
    sparkPythonTask?: Optional<SparkPythonTask>;
    @Expose({ name: 'SparkSubmitTask' })
    @Type(() => SparkSubmitTask)
    sparkSubmitTask?: Optional<SparkSubmitTask>;
    @Expose({ name: 'PipelineTask' })
    @Type(() => PipelineTask)
    pipelineTask?: Optional<PipelineTask>;
    @Expose({ name: 'PythonWheelTask' })
    @Type(() => PythonWheelTask)
    pythonWheelTask?: Optional<PythonWheelTask>;
    @Expose({ name: 'Libraries' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'libraries', value, obj, [Array, Map]),
        {
            toClassOnly: true,
        }
    )
    libraries?: Optional<Array<Map<string, object>>>;
    @Expose({ name: 'EmailNotifications' })
    @Type(() => EmailNotifications)
    emailNotifications?: Optional<EmailNotifications>;
    @Expose({ name: 'TimeoutSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeoutSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeoutSeconds?: Optional<integer>;
    @Expose({ name: 'MaxRetries' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxRetries', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxRetries?: Optional<integer>;
    @Expose({ name: 'MinRetryIntervalMillies' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minRetryIntervalMillies', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minRetryIntervalMillies?: Optional<integer>;
    @Expose({ name: 'RetryOnTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'retryOnTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    retryOnTimeout?: Optional<boolean>;

}

export class NotebookTask extends BaseModel {
    ['constructor']: typeof NotebookTask;


    @Expose({ name: 'NotebookPath' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'notebookPath', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    notebookPath?: Optional<string>;
    @Expose({ name: 'BaseParameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'baseParameters', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    baseParameters?: Optional<Map<string, object>>;

}

export class SparkJarTask extends BaseModel {
    ['constructor']: typeof SparkJarTask;


    @Expose({ name: 'MainClassName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'mainClassName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    mainClassName?: Optional<string>;
    @Expose({ name: 'Parameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'parameters', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    parameters?: Optional<Map<string, object>>;

}

export class SparkPythonTask extends BaseModel {
    ['constructor']: typeof SparkPythonTask;


    @Expose({ name: 'PythonFile' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pythonFile', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pythonFile?: Optional<string>;
    @Expose({ name: 'Parameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'parameters', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    parameters?: Optional<Map<string, object>>;

}

export class SparkSubmitTask extends BaseModel {
    ['constructor']: typeof SparkSubmitTask;


    @Expose({ name: 'Parameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'parameters', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    parameters?: Optional<Map<string, object>>;

}

export class PipelineTask extends BaseModel {
    ['constructor']: typeof PipelineTask;


    @Expose({ name: 'PipelineId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pipelineId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pipelineId?: Optional<string>;
    @Expose({ name: 'FullRefresh' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'fullRefresh', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fullRefresh?: Optional<boolean>;

}

export class PythonWheelTask extends BaseModel {
    ['constructor']: typeof PythonWheelTask;


    @Expose({ name: 'PackageName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'packageName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    packageName?: Optional<string>;
    @Expose({ name: 'EntryPoint' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'entryPoint', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    entryPoint?: Optional<string>;
    @Expose({ name: 'Parameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'parameters', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    parameters?: Optional<Array<string>>;
    @Expose({ name: 'NamedParameters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'namedParameters', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    namedParameters?: Optional<Map<string, object>>;

}

export class EmailNotifications extends BaseModel {
    ['constructor']: typeof EmailNotifications;


    @Expose({ name: 'OnStart' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'onStart', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    onStart?: Optional<Array<string>>;
    @Expose({ name: 'OnSuccess' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'onSuccess', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    onSuccess?: Optional<Array<string>>;
    @Expose({ name: 'OnFailure' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'onFailure', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    onFailure?: Optional<Array<string>>;
    @Expose({ name: 'NoAlertForSkippedRuns' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'noAlertForSkippedRuns', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    noAlertForSkippedRuns?: Optional<boolean>;

}

export class Schedule extends BaseModel {
    ['constructor']: typeof Schedule;


    @Expose({ name: 'QuartzCronExpression' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'quartzCronExpression', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    quartzCronExpression?: Optional<string>;
    @Expose({ name: 'TimezoneId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timezoneId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timezoneId?: Optional<string>;
    @Expose({ name: 'PauseStatus' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pauseStatus', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pauseStatus?: Optional<string>;

}

export class AccessUser extends BaseModel {
    ['constructor']: typeof AccessUser;


    @Expose({ name: 'UserName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'userName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    userName?: Optional<string>;
    @Expose({ name: 'PermissionLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'permissionLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    permissionLevel?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'DatabricksAccess' })
    @Type(() => DatabricksAccess)
    databricksAccess?: Optional<DatabricksAccess>;

}

export class DatabricksAccess extends BaseModel {
    ['constructor']: typeof DatabricksAccess;


    @Expose({ name: 'DatabricksInstance' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'databricksInstance', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    databricksInstance?: Optional<string>;
    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;

}

