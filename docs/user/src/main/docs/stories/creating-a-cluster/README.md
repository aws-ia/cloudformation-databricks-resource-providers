# Set up a small Databricks Cluster

## Prerequisites

There are a few prerequisites necessary to use the Databricks::Clusters::Cluster resource.

1. You need a Databricks account and workspace. See [Set up your Databricks account and create a workspace](https://docs.databricks.com/getting-started/account-setup.html) for instructions on how to set this up.
2. You need to configure an api key in databricks.  This will be used by cloudformation to manage the cluster resource.  See [Authentication using Databricks personal access tokens](https://docs.databricks.com/dev-tools/api/latest/authentication.html#authentication-using-databricks-personal-access-tokens).
3. You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
   for each of the activated types, containing a **Token** and **DatabricksInstance**.

## Create a Cluster

The following cloudformation will create a single-node cluster.  It will be started in a running state.

```yaml
  SparkCluster:
    Type: Databricks::Clusters::Cluster
    Properties:
      ClusterName: My-Demo-Cluster
      SparkVersion: 7.3.x-scala2.12
      NodeTypeId: i3.xlarge
      SparkConf:
        spark.databricks.cluster.profile: singleNode
        spark.speculation: "true"
      AwsAttributes:
        Availability: SPOT
        ZoneId: eu-west-2a
      NumWorkers: 0
      DriverNodeTypeId: i3.xlarge
      CustomTags:
        resourceClass: SingleNode
      AutoterminationMinutes: 0
      EnableElasticDisk: false
      ApplyPolicyDefaultValues: false
      EnableLocalDiskEncryption: false
```

## Add a job

We can also create a job that will run on the cluster.

```yaml
  Job:
    Type: Databricks::Clusters::Jobs
    Properties:
      Name: mytestjobnextgen
      EmailNotifications:
        NoAlertForSkippedRuns: false
      TimeoutSeconds: 0
      MaxConcurrentRuns: 1
      Format: "MULTI_TASK"
      ExistingClusterId: !GetAtt SparkCluster.ClusterId
```

## Deploying the resources

You can deploy the above using the [example.yaml](example.yaml)