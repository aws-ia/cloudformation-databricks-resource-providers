# Databricks::Clusters::Cluster S3destination

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#destination" title="Destination">Destination</a>" : <i><a href="destination.md">Destination</a></i>,
    "<a href="#region" title="Region">Region</a>" : <i>String</i>,
    "<a href="#warehouse" title="Warehouse">Warehouse</a>" : <i>String</i>,
    "<a href="#enableencryption" title="EnableEncryption">EnableEncryption</a>" : <i>Boolean</i>,
    "<a href="#encryptiontype" title="EncryptionType">EncryptionType</a>" : <i>String</i>,
    "<a href="#kmskey" title="KmsKey">KmsKey</a>" : <i>String</i>,
    "<a href="#cannedacl" title="CannedAcl">CannedAcl</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#destination" title="Destination">Destination</a>: <i><a href="destination.md">Destination</a></i>
<a href="#region" title="Region">Region</a>: <i>String</i>
<a href="#warehouse" title="Warehouse">Warehouse</a>: <i>String</i>
<a href="#enableencryption" title="EnableEncryption">EnableEncryption</a>: <i>Boolean</i>
<a href="#encryptiontype" title="EncryptionType">EncryptionType</a>: <i>String</i>
<a href="#kmskey" title="KmsKey">KmsKey</a>: <i>String</i>
<a href="#cannedacl" title="CannedAcl">CannedAcl</a>: <i>String</i>
</pre>

## Properties

#### Destination

_Required_: No

_Type_: <a href="destination.md">Destination</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Region

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Warehouse

S3 warehouse. For example: https://s3-us-west-2.amazonaws.com. Either region or warehouse must be set. If both are set, warehouse is used.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EnableEncryption

Enable server side encryption, false by default.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EncryptionType

The encryption type, it could be sse-s3 or sse-kms. It is used only when encryption is enabled and the default type is sse-s3.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### KmsKey

KMS key used if encryption is enabled and encryption type is set to sse-kms.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CannedAcl

Set canned access control list. For example: bucket-owner-full-control. If canned_acl is set, the cluster instance profile must have s3:PutObjectAcl permission on the destination bucket and prefix. The full list of possible canned ACLs can be found at https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl. By default only the object owner gets full control. If you are using cross account role for writing data, you may want to set bucket-owner-full-control to make bucket owner able to read the logs.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

