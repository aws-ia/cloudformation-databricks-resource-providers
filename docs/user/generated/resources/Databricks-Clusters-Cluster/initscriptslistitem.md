# Databricks::Clusters::Cluster InitScriptsListItem

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#dbfs" title="Dbfs">Dbfs</a>" : <i><a href="destination.md">Destination</a></i>,
    "<a href="#file" title="File">File</a>" : <i><a href="destination.md">Destination</a></i>,
    "<a href="#s3" title="S3">S3</a>" : <i><a href="s3destination.md">S3destination</a></i>
}
</pre>

### YAML

<pre>
<a href="#dbfs" title="Dbfs">Dbfs</a>: <i><a href="destination.md">Destination</a></i>
<a href="#file" title="File">File</a>: <i><a href="destination.md">Destination</a></i>
<a href="#s3" title="S3">S3</a>: <i><a href="s3destination.md">S3destination</a></i>
</pre>

## Properties

#### Dbfs

_Required_: No

_Type_: <a href="destination.md">Destination</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### File

_Required_: No

_Type_: <a href="destination.md">Destination</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### S3

_Required_: No

_Type_: <a href="s3destination.md">S3destination</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

