# Databricks::Clusters::Cluster

Manage a Databricks Cluster

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Databricks::Clusters::Cluster",
    "Properties" : {
        "<a href="#numworkers" title="NumWorkers">NumWorkers</a>" : <i>Integer</i>,
        "<a href="#autoscale" title="Autoscale">Autoscale</a>" : <i><a href="autoscale.md">Autoscale</a></i>,
        "<a href="#clustername" title="ClusterName">ClusterName</a>" : <i>String</i>,
        "<a href="#sparkversion" title="SparkVersion">SparkVersion</a>" : <i>String</i>,
        "<a href="#sparkconf" title="SparkConf">SparkConf</a>" : <i>Map</i>,
        "<a href="#awsattributes" title="AwsAttributes">AwsAttributes</a>" : <i><a href="awsattributes.md">AwsAttributes</a></i>,
        "<a href="#nodetypeid" title="NodeTypeId">NodeTypeId</a>" : <i>String</i>,
        "<a href="#drivernodetypeid" title="DriverNodeTypeId">DriverNodeTypeId</a>" : <i>String</i>,
        "<a href="#sshpublickeys" title="SshPublicKeys">SshPublicKeys</a>" : <i>[ String, ... ]</i>,
        "<a href="#customtags" title="CustomTags">CustomTags</a>" : <i>Map</i>,
        "<a href="#clusterlogconf" title="ClusterLogConf">ClusterLogConf</a>" : <i><a href="clusterlogconf.md">ClusterLogConf</a></i>,
        "<a href="#initscripts" title="InitScripts">InitScripts</a>" : <i>[ <a href="initscriptslistitem.md">InitScriptsListItem</a>, ... ]</i>,
        "<a href="#dockerimage" title="DockerImage">DockerImage</a>" : <i><a href="dockerimage.md">DockerImage</a></i>,
        "<a href="#sparkenvvars" title="SparkEnvVars">SparkEnvVars</a>" : <i>Map</i>,
        "<a href="#autoterminationminutes" title="AutoterminationMinutes">AutoterminationMinutes</a>" : <i>Integer</i>,
        "<a href="#enableelasticdisk" title="EnableElasticDisk">EnableElasticDisk</a>" : <i>Boolean</i>,
        "<a href="#driverinstancepoolid" title="DriverInstancePoolId">DriverInstancePoolId</a>" : <i>String</i>,
        "<a href="#instancepoolid" title="InstancePoolId">InstancePoolId</a>" : <i>String</i>,
        "<a href="#idempotencytoken" title="IdempotencyToken">IdempotencyToken</a>" : <i>String</i>,
        "<a href="#applypolicydefaultvalues" title="ApplyPolicyDefaultValues">ApplyPolicyDefaultValues</a>" : <i>Boolean</i>,
        "<a href="#enablelocaldiskencryption" title="EnableLocalDiskEncryption">EnableLocalDiskEncryption</a>" : <i>Boolean</i>,
        "<a href="#runtimeengine" title="RuntimeEngine">RuntimeEngine</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Databricks::Clusters::Cluster
Properties:
    <a href="#numworkers" title="NumWorkers">NumWorkers</a>: <i>Integer</i>
    <a href="#autoscale" title="Autoscale">Autoscale</a>: <i><a href="autoscale.md">Autoscale</a></i>
    <a href="#clustername" title="ClusterName">ClusterName</a>: <i>String</i>
    <a href="#sparkversion" title="SparkVersion">SparkVersion</a>: <i>String</i>
    <a href="#sparkconf" title="SparkConf">SparkConf</a>: <i>Map</i>
    <a href="#awsattributes" title="AwsAttributes">AwsAttributes</a>: <i><a href="awsattributes.md">AwsAttributes</a></i>
    <a href="#nodetypeid" title="NodeTypeId">NodeTypeId</a>: <i>String</i>
    <a href="#drivernodetypeid" title="DriverNodeTypeId">DriverNodeTypeId</a>: <i>String</i>
    <a href="#sshpublickeys" title="SshPublicKeys">SshPublicKeys</a>: <i>
      - String</i>
    <a href="#customtags" title="CustomTags">CustomTags</a>: <i>Map</i>
    <a href="#clusterlogconf" title="ClusterLogConf">ClusterLogConf</a>: <i><a href="clusterlogconf.md">ClusterLogConf</a></i>
    <a href="#initscripts" title="InitScripts">InitScripts</a>: <i>
      - <a href="initscriptslistitem.md">InitScriptsListItem</a></i>
    <a href="#dockerimage" title="DockerImage">DockerImage</a>: <i><a href="dockerimage.md">DockerImage</a></i>
    <a href="#sparkenvvars" title="SparkEnvVars">SparkEnvVars</a>: <i>Map</i>
    <a href="#autoterminationminutes" title="AutoterminationMinutes">AutoterminationMinutes</a>: <i>Integer</i>
    <a href="#enableelasticdisk" title="EnableElasticDisk">EnableElasticDisk</a>: <i>Boolean</i>
    <a href="#driverinstancepoolid" title="DriverInstancePoolId">DriverInstancePoolId</a>: <i>String</i>
    <a href="#instancepoolid" title="InstancePoolId">InstancePoolId</a>: <i>String</i>
    <a href="#idempotencytoken" title="IdempotencyToken">IdempotencyToken</a>: <i>String</i>
    <a href="#applypolicydefaultvalues" title="ApplyPolicyDefaultValues">ApplyPolicyDefaultValues</a>: <i>Boolean</i>
    <a href="#enablelocaldiskencryption" title="EnableLocalDiskEncryption">EnableLocalDiskEncryption</a>: <i>Boolean</i>
    <a href="#runtimeengine" title="RuntimeEngine">RuntimeEngine</a>: <i>String</i>
</pre>

## Properties

#### NumWorkers

If num_workers, number of worker nodes that this cluster should have. A cluster has one Spark driver and num_workers executors for a total of num_workers + 1 Spark nodes.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Autoscale

Range defining the min and max number of cluster workers

_Required_: No

_Type_: <a href="autoscale.md">Autoscale</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClusterName

Cluster name requested by the user. This doesn't have to be unique. If not specified at creation, the cluster name will be an empty string.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkVersion

The runtime version of the cluster. You can retrieve a list of available runtime versions by using the Runtime versions API call. This field is required.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkConf

An object containing a set of optional, user-specified Spark configuration key-value pairs. You can also pass in a string of extra JVM options to the driver and the executors via spark.driver.extraJavaOptions and spark.executor.extraJavaOptions respectively. Example Spark confs: {"spark.speculation": true, "spark.streaming.ui.retainedBatches": 5} or {"spark.driver.extraJavaOptions": "-verbose:gc -XX:+PrintGCDetails"}

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AwsAttributes

Attributes set during cluster creation related to Amazon Web Services.

_Required_: No

_Type_: <a href="awsattributes.md">AwsAttributes</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NodeTypeId

This field encodes, through a single value, the resources available to each of the Spark nodes in this cluster. For example, the Spark nodes can be provisioned and optimized for memory or compute intensive workloads A list of available node types can be retrieved by using the List node types API call. This field is required.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DriverNodeTypeId

The node type of the Spark driver. This field is optional; if unset, the driver node type will be set as the same value as node_type_id defined above.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SshPublicKeys

SSH public key contents that will be added to each Spark node in this cluster. The corresponding private keys can be used to login with the user name ubuntu on port 2200. Up to 10 keys can be specified.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CustomTags

An object containing a set of tags for cluster resources. Databricks tags all cluster resources (such as AWS instances and EBS volumes) with these tags in addition to default_tags.

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClusterLogConf

Path to cluster log.

_Required_: No

_Type_: <a href="clusterlogconf.md">ClusterLogConf</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### InitScripts

The configuration for storing init scripts. Any number of destinations can be specified. The scripts are executed sequentially in the order provided. If cluster_log_conf is specified, init script logs are sent to <destination>/<cluster-ID>/init_scripts.

_Required_: No

_Type_: List of <a href="initscriptslistitem.md">InitScriptsListItem</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DockerImage

Docker image connection information

_Required_: No

_Type_: <a href="dockerimage.md">DockerImage</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkEnvVars

An object containing a set of optional, user-specified environment variable key-value pairs. Key-value pairs of the form (X,Y) are exported as is (that is, export X='Y') while launching the driver and workers. In order to specify an additional set of SPARK_DAEMON_JAVA_OPTS, we recommend appending them to $SPARK_DAEMON_JAVA_OPTS as shown in the following example. This ensures that all default Databricks managed environmental variables are included as well. Example Spark environment variables: {"SPARK_WORKER_MEMORY": "28000m", "SPARK_LOCAL_DIRS": "/local_disk0"} or {"SPARK_DAEMON_JAVA_OPTS": "$SPARK_DAEMON_JAVA_OPTS

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoterminationMinutes

Automatically terminates the cluster after it is inactive for this time in minutes. If not set, this cluster will not be automatically terminated. If specified, the threshold must be between 10 and 10000 minutes. You can also set this value to 0 to explicitly disable

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableElasticDisk

Autoscaling Local Storage: when enabled, this cluster will dynamically acquire additional disk space when its Spark workers are running low on disk space. This feature requires specific AWS permissions to function correctly - refer to Autoscaling local storage for details.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DriverInstancePoolId

The optional ID of the instance pool to use for the driver node. You must also specify instance_pool_id. Refer to Instance Pools API 2.0 for details.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### InstancePoolId

The optional ID of the instance pool to use for cluster nodes. If driver_instance_pool_id is present, instance_pool_id is used for worker nodes only. Otherwise, it is used for both the driver and worker nodes. Refer to Instance Pools API 2.0 for details.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IdempotencyToken

An optional token that can be used to guarantee the idempotency of cluster creation requests. If the idempotency token is assigned to a cluster that is not in the TERMINATED state, the request does not create a new cluster but instead returns the ID of the existing cluster. Otherwise, a new cluster is created. The idempotency token is cleared when the cluster is terminated

If you specify the idempotency token, upon failure you can retry until the request succeeds. Databricks guarantees that exactly one cluster will be launched with that idempotency token.

This token should have at most 64 characters.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ApplyPolicyDefaultValues

Whether to use policy default values for missing cluster attributes.



_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableLocalDiskEncryption

Whether encryption of disks locally attached to the cluster is enabled.



_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RuntimeEngine

The type of runtime engine to use. If not specified, the runtime engine type is inferred based on the spark_version value. Allowed values include:

PHOTON: Use the Photon runtime engine type.

STANDARD: Use the standard runtime engine type.

This field is optional.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ClusterId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### ClusterId

Canonical identifier for the cluster

#### State

The state of the cluster.

#### StateMessage

The state of the cluster.

#### LastStateLossTime

Returns the <code>LastStateLossTime</code> value.

#### LastActivityTime

Returns the <code>LastActivityTime</code> value.

#### LastRestartedTime

Returns the <code>LastRestartedTime</code> value.

#### ClusterMemoryMb

Returns the <code>ClusterMemoryMb</code> value.

#### ClusterCores

Returns the <code>ClusterCores</code> value.

