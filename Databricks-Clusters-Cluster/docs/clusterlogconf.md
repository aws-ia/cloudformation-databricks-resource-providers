# Databricks::Clusters::Cluster ClusterLogConf

Path to cluster log.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#dbfsstorageinfo" title="DbfsStorageInfo">DbfsStorageInfo</a>" : <i>String</i>,
    "<a href="#s3storageinfo" title="S3StorageInfo">S3StorageInfo</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#dbfsstorageinfo" title="DbfsStorageInfo">DbfsStorageInfo</a>: <i>String</i>
<a href="#s3storageinfo" title="S3StorageInfo">S3StorageInfo</a>: <i>String</i>
</pre>

## Properties

#### DbfsStorageInfo

DBFS destination. Example: dbfs:/my/path

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### S3StorageInfo

File destination. Example: file:/my/file.sh

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

