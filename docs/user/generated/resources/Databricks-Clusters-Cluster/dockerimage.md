# Databricks::Clusters::Cluster DockerImage

Docker image connection information

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#url" title="Url">Url</a>" : <i>String</i>,
    "<a href="#basicauth" title="BasicAuth">BasicAuth</a>" : <i><a href="dockerbasicauth.md">DockerBasicAuth</a></i>
}
</pre>

### YAML

<pre>
<a href="#url" title="Url">Url</a>: <i>String</i>
<a href="#basicauth" title="BasicAuth">BasicAuth</a>: <i><a href="dockerbasicauth.md">DockerBasicAuth</a></i>
</pre>

## Properties

#### Url

URL for the Docker image.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BasicAuth

Basic authentication information for Docker repository

_Required_: No

_Type_: <a href="dockerbasicauth.md">DockerBasicAuth</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

