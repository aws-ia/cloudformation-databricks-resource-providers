# Databricks::Clusters::Cluster AwsAttributes

Attributes set during cluster creation related to Amazon Web Services.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#firstondemand" title="FirstOnDemand">FirstOnDemand</a>" : <i>Integer</i>,
    "<a href="#availability" title="Availability">Availability</a>" : <i>String</i>,
    "<a href="#zoneid" title="ZoneId">ZoneId</a>" : <i>String</i>,
    "<a href="#instanceprofilearn" title="InstanceProfileArn">InstanceProfileArn</a>" : <i>String</i>,
    "<a href="#spotbidpricepercent" title="SpotBidPricePercent">SpotBidPricePercent</a>" : <i>Integer</i>,
    "<a href="#ebsvolumetype" title="EbsVolumeType">EbsVolumeType</a>" : <i>String</i>,
    "<a href="#ebsvolumecount" title="EbsVolumeCount">EbsVolumeCount</a>" : <i>Integer</i>,
    "<a href="#ebsvolumesize" title="EbsVolumeSize">EbsVolumeSize</a>" : <i>Integer</i>,
    "<a href="#ebsvolumeiops" title="EbsVolumeIops">EbsVolumeIops</a>" : <i>Integer</i>,
    "<a href="#ebsvolumethroughput" title="EbsVolumeThroughput">EbsVolumeThroughput</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#firstondemand" title="FirstOnDemand">FirstOnDemand</a>: <i>Integer</i>
<a href="#availability" title="Availability">Availability</a>: <i>String</i>
<a href="#zoneid" title="ZoneId">ZoneId</a>: <i>String</i>
<a href="#instanceprofilearn" title="InstanceProfileArn">InstanceProfileArn</a>: <i>String</i>
<a href="#spotbidpricepercent" title="SpotBidPricePercent">SpotBidPricePercent</a>: <i>Integer</i>
<a href="#ebsvolumetype" title="EbsVolumeType">EbsVolumeType</a>: <i>String</i>
<a href="#ebsvolumecount" title="EbsVolumeCount">EbsVolumeCount</a>: <i>Integer</i>
<a href="#ebsvolumesize" title="EbsVolumeSize">EbsVolumeSize</a>: <i>Integer</i>
<a href="#ebsvolumeiops" title="EbsVolumeIops">EbsVolumeIops</a>: <i>Integer</i>
<a href="#ebsvolumethroughput" title="EbsVolumeThroughput">EbsVolumeThroughput</a>: <i>Integer</i>
</pre>

## Properties

#### FirstOnDemand

The first first_on_demand nodes of the cluster will be placed on on-demand instances. If this value is greater than 0, the cluster driver node will be placed on an on-demand instance. If this value is greater than or equal to the current cluster size, all nodes will be placed on on-demand instances. If this value is less than the current cluster size, first_on_demand nodes will be placed on on-demand instances and the remainder will be placed on availability instances. This value does not affect cluster size and cannot be mutated over the lifetime of a cluster.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Availability

Availability type used for all subsequent nodes past the first_on_demand ones. Note: If first_on_demand is zero, this availability type will be used for the entire cluster.

_Required_: No

_Type_: String

_Allowed Values_: <code>SPOT</code> | <code>ON_DEMAND</code> | <code>SPOT_WITH_FALLBACK</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ZoneId

Identifier for the availability zone/datacenter in which the cluster resides. You have three options:

Specify an availability zone as a string, for example: 'us-west-2a'. The provided availability zone must be in the same region as the Databricks deployment. For example, 'us-west-2a' is not a valid zone ID if the Databricks deployment resides in the 'us-east-1' region.

Enable automatic availability zone selection ('Auto-AZ'), by setting the value 'auto'. Databricks selects the AZ based on available IPs in the workspace subnets and retries in other availability zones if AWS returns insufficient capacity errors.

Do not specify a value. If not specified, a default zone will be used.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### InstanceProfileArn

Nodes for this cluster will only be placed on AWS instances with this instance profile. If omitted, nodes will be placed on instances without an instance profile. The instance profile must have previously been added to the Databricks environment by an account administrator.

This feature may only be available to certain customer plans.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SpotBidPricePercent

The max price for AWS spot instances, as a percentage of the corresponding instance type's on-demand price. For example, if this field is set to 50, and the cluster needs a new i3.xlarge spot instance, then the max price is half of the price of on-demand i3.xlarge instances. Similarly, if this field is set to 200, the max price is twice the price of on-demand i3.xlarge instances. If not specified, the default value is 100. When spot instances are requested for this cluster, only spot instances whose max price percentage matches this field will be considered. For safety, we enforce this field to be no more than 10000.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EbsVolumeType

The type of EBS volumes that will be launched with this cluster.

_Required_: No

_Type_: String

_Allowed Values_: <code>GENERAL_PURPOSE_SSD</code> | <code>THROUGHPUT_OPTIMIZED_HDD</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EbsVolumeCount

The number of volumes launched for each instance. You can choose up to 10 volumes. This feature is only enabled for supported node types. Legacy node types cannot specify custom EBS volumes. For node types with no instance store, at least one EBS volume needs to be specified; otherwise, cluster creation will fail.

These EBS volumes will be mounted at /ebs0, /ebs1, and etc. Instance store volumes will be mounted at /local_disk0, /local_disk1, and etc.

If EBS volumes are attached, Databricks will configure Spark to use only the EBS volumes for scratch storage because heterogeneously sized scratch devices can lead to inefficient disk utilization. If no EBS volumes are attached, Databricks will configure Spark to use instance store volumes.

If EBS volumes are specified, then the Spark configuration spark.local.dir will be overridden.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EbsVolumeSize

The size of each EBS volume (in GiB) launched for each instance. For general purpose SSD, this value must be within the range 100 - 4096. For throughput optimized HDD, this value must be within the range 500 - 4096. Custom EBS volumes cannot be specified for the legacy node types (memory-optimized and compute-optimized).

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EbsVolumeIops

The number of IOPS per EBS gp3 volume.

This value must be between 3000 and 16000.

The value of IOPS and throughput is calculated based on AWS documentation to match the maximum performance of a gp2 volume with the same volume size.

For more information, see the EBS volume limit calculator.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EbsVolumeThroughput

The throughput per EBS gp3 volume, in MiB per second.

This value must be between 125 and 1000.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

