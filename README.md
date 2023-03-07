# Databricks Cloudformation resources

This collection of [AWS CloudFormation resource types][1] allow Databricks to be controlled using [AWS CloudFormation][2].

There is also [developer documentation](docs/dev) available
if you are interested in building or contributing.

| Resource | Description | Documentation |
| --- | --- | --- |
| Databricks::Clusters::Clusters | This resource type manages a [Databricks Cluster][3] | [/Databricks-Clusters-Cluster][4] |
| Databricks::Clusters::Job | This resource type manages a [Databricks Cluster Job][5] | [/Databricks-Clusters-Job][6] |

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Databricks account][16] and [Access Token][17]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Databricks" prefix.

  Note: All official  Databricks resources begin with `Databricks::` and specify that they are `Published by Databricks`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
  - Extension name
  - Execution role ARN
  - Automatic updates for minor version releases
  - Configuration
  

6. In your terminal, specify the configuration data for the registered Databricks CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


  For example:

  ```Bash
  $ aws cloudformation set-type-configuration \z`
  --region us-west-2 --type RESOURCE \
  --type-name Databricks::Clusters::Job \
  --configuration-alias default \
  --configuration "{ \"DatabricksAccess\":{\"DatabricksInstance\":\"https://abc123.cloud.databricks.com\",\"Token\":\"YOURAPIKEY\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Databricks resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The Databricks CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples

### [Sample use cases][18]

### Databricks Cluster creation example using the Cloudformation Databricks resource
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Databricks Cluster in Databricks
Resources:
  MySampleProject:
    Type: Databricks::Clusters::Cluster
    Properties:
      ClusterName: my-cluster,
      SparkVersion: 7.3.x-scala2.12,
      NodeTypeId: i3.xlarge,
      AwsAttributes: 
        Availability: ON_DEMAND,
        ZoneId: eu-west-1c,
        SpotBidPricePercent: 100,
        FirstOnDemand: 1,
        EbsVolumeSize: 1,
        EbsVolumeThroughput: 125,
        EbsVolumeCount: 0,
        EbsVolumeType: GENERAL_PURPOSE_SSD,
        EbsVolumeIops: 3000
      NumWorkers: 1,
      DriverNodeTypeId: i3.xlarge,
      AutoterminationMinutes: 0,
      EnableElasticDisk: false,
      ApplyPolicyDefaultValues: false,
      EnableLocalDiskEncryption: false,
```

### Shows how to create an Job in Databricks
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Job in Databricks
Resources:
  Type: Databricks::Clusters::Jobs
  MySampleProject:
    Name: mytestjobnextgen,
    EmailNotifications: 
      NoAlertForSkippedRuns: false
    TimeoutSeconds: 0,
    Schedule:
      TimezoneId: Europe/London,
      QuartzCronExpression: 20 30 * * * ?
    MaxConcurrentRuns: 1,
    ExistingClusterId: 1201-092121-123abcsd,
    Format: SINGLE_TASK,
    AccessControlList:
      - UserName: example.user@example.com,
        PermissionLevel: IS_OWNER
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://docs.databricks.com/dev-tools/api/latest/clusters.html
[4]: ./Databricks-Clusters-Cluster/
[5]: https://docs.databricks.com/dev-tools/api/latest/jobs.html
[6]: ./Databricks-Clusters-Job/
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://www.databricks.com/
[17]: https://docs.databricks.com/administration-guide/access-control/tokens.html
[18]: ./docs/user/src/main/docs/README.md
