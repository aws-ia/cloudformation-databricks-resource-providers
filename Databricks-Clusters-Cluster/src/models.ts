// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Databricks::Clusters::Cluster';

    @Exclude()
    protected readonly IDENTIFIER_KEY_CLUSTERID: string = '/properties/ClusterId';

    @Expose({ name: 'ClusterId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clusterId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clusterId?: Optional<string>;
    @Expose({ name: 'NumWorkers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'numWorkers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numWorkers?: Optional<integer>;
    @Expose({ name: 'Autoscale' })
    @Type(() => Autoscale)
    autoscale?: Optional<Autoscale>;
    @Expose({ name: 'ClusterName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clusterName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clusterName?: Optional<string>;
    @Expose({ name: 'SparkVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sparkVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sparkVersion?: Optional<string>;
    @Expose({ name: 'SparkConf' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'sparkConf', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    sparkConf?: Optional<Map<string, object>>;
    @Expose({ name: 'AwsAttributes' })
    @Type(() => AwsAttributes)
    awsAttributes?: Optional<AwsAttributes>;
    @Expose({ name: 'NodeTypeId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'nodeTypeId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    nodeTypeId?: Optional<string>;
    @Expose({ name: 'DriverNodeTypeId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'driverNodeTypeId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    driverNodeTypeId?: Optional<string>;
    @Expose({ name: 'SshPublicKeys' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sshPublicKeys', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    sshPublicKeys?: Optional<Array<string>>;
    @Expose({ name: 'CustomTags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'customTags', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    customTags?: Optional<Map<string, object>>;
    @Expose({ name: 'ClusterLogConf' })
    @Type(() => ClusterLogConf)
    clusterLogConf?: Optional<ClusterLogConf>;
    @Expose({ name: 'InitScripts' })
    @Type(() => InitScriptsListItem)
    initScripts?: Optional<Array<InitScriptsListItem>>;
    @Expose({ name: 'DockerImage' })
    @Type(() => DockerImage)
    dockerImage?: Optional<DockerImage>;
    @Expose({ name: 'SparkEnvVars' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'sparkEnvVars', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    sparkEnvVars?: Optional<Map<string, object>>;
    @Expose({ name: 'AutoterminationMinutes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'autoterminationMinutes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoterminationMinutes?: Optional<integer>;
    @Expose({ name: 'EnableElasticDisk' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableElasticDisk', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableElasticDisk?: Optional<boolean>;
    @Expose({ name: 'DriverInstancePoolId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'driverInstancePoolId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    driverInstancePoolId?: Optional<string>;
    @Expose({ name: 'InstancePoolId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'instancePoolId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    instancePoolId?: Optional<string>;
    @Expose({ name: 'IdempotencyToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'idempotencyToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    idempotencyToken?: Optional<string>;
    @Expose({ name: 'ApplyPolicyDefaultValues' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'applyPolicyDefaultValues', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    applyPolicyDefaultValues?: Optional<boolean>;
    @Expose({ name: 'EnableLocalDiskEncryption' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableLocalDiskEncryption', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableLocalDiskEncryption?: Optional<boolean>;
    @Expose({ name: 'RuntimeEngine' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'runtimeEngine', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    runtimeEngine?: Optional<string>;
    @Expose({ name: 'State' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'state', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    state?: Optional<string>;
    @Expose({ name: 'StateMessage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'stateMessage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    stateMessage?: Optional<string>;
    @Expose({ name: 'LastStateLossTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'lastStateLossTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastStateLossTime?: Optional<integer>;
    @Expose({ name: 'LastActivityTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'lastActivityTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastActivityTime?: Optional<integer>;
    @Expose({ name: 'LastRestartedTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'lastRestartedTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastRestartedTime?: Optional<integer>;
    @Expose({ name: 'ClusterMemoryMb' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'clusterMemoryMb', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clusterMemoryMb?: Optional<integer>;
    @Expose({ name: 'ClusterCores' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'clusterCores', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clusterCores?: Optional<integer>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.clusterId != null) {
            identifier[this.IDENTIFIER_KEY_CLUSTERID] = this.clusterId;
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

export class Autoscale extends BaseModel {
    ['constructor']: typeof Autoscale;


    @Expose({ name: 'MinWorkers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minWorkers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minWorkers?: Optional<integer>;
    @Expose({ name: 'MaxWorkers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxWorkers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxWorkers?: Optional<integer>;

}

export class AwsAttributes extends BaseModel {
    ['constructor']: typeof AwsAttributes;


    @Expose({ name: 'FirstOnDemand' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'firstOnDemand', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    firstOnDemand?: Optional<integer>;
    @Expose({ name: 'Availability' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'availability', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availability?: Optional<string>;
    @Expose({ name: 'ZoneId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'zoneId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zoneId?: Optional<string>;
    @Expose({ name: 'InstanceProfileArn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'instanceProfileArn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    instanceProfileArn?: Optional<string>;
    @Expose({ name: 'SpotBidPricePercent' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'spotBidPricePercent', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    spotBidPricePercent?: Optional<integer>;
    @Expose({ name: 'EbsVolumeType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ebsVolumeType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ebsVolumeType?: Optional<string>;
    @Expose({ name: 'EbsVolumeCount' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'ebsVolumeCount', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ebsVolumeCount?: Optional<integer>;
    @Expose({ name: 'EbsVolumeSize' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'ebsVolumeSize', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ebsVolumeSize?: Optional<integer>;
    @Expose({ name: 'EbsVolumeIops' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'ebsVolumeIops', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ebsVolumeIops?: Optional<integer>;
    @Expose({ name: 'EbsVolumeThroughput' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'ebsVolumeThroughput', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ebsVolumeThroughput?: Optional<integer>;

}

export class ClusterLogConf extends BaseModel {
    ['constructor']: typeof ClusterLogConf;


    @Expose({ name: 'DbfsStorageInfo' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dbfsStorageInfo', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dbfsStorageInfo?: Optional<string>;
    @Expose({ name: 'S3StorageInfo' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 's3StorageInfo', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    s3StorageInfo?: Optional<string>;

}

export class InitScriptsListItem extends BaseModel {
    ['constructor']: typeof InitScriptsListItem;


    @Expose({ name: 'Dbfs' })
    @Type(() => Destination)
    dbfs?: Optional<Destination>;
    @Expose({ name: 'File' })
    @Type(() => Destination)
    file?: Optional<Destination>;
    @Expose({ name: 'S3' })
    @Type(() => S3destination)
    s3?: Optional<S3destination>;

}

export class Destination extends BaseModel {
    ['constructor']: typeof Destination;


    @Expose({ name: 'Destination' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'destination', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    destination?: Optional<string>;

}

export class S3destination extends BaseModel {
    ['constructor']: typeof S3destination;


    @Expose({ name: 'Destination' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'destination', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    destination?: Optional<string>;
    @Expose({ name: 'Region' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'region', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    region?: Optional<string>;
    @Expose({ name: 'Warehouse' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'warehouse', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    warehouse?: Optional<string>;
    @Expose({ name: 'EnableEncryption' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enableEncryption', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enableEncryption?: Optional<boolean>;
    @Expose({ name: 'EncryptionType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'encryptionType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    encryptionType?: Optional<string>;
    @Expose({ name: 'KmsKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'kmsKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    kmsKey?: Optional<string>;
    @Expose({ name: 'CannedAcl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'cannedAcl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    cannedAcl?: Optional<string>;

}

export class DockerImage extends BaseModel {
    ['constructor']: typeof DockerImage;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'BasicAuth' })
    @Type(() => DockerBasicAuth)
    basicAuth?: Optional<DockerBasicAuth>;

}

export class DockerBasicAuth extends BaseModel {
    ['constructor']: typeof DockerBasicAuth;


    @Expose({ name: 'Username' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'username', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    username?: Optional<string>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;

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

