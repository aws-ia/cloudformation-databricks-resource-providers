# Databricks::Clusters::Cluster Autoscale

Range defining the min and max number of cluster workers

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#minworkers" title="MinWorkers">MinWorkers</a>" : <i>Integer</i>,
    "<a href="#maxworkers" title="MaxWorkers">MaxWorkers</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#minworkers" title="MinWorkers">MinWorkers</a>: <i>Integer</i>
<a href="#maxworkers" title="MaxWorkers">MaxWorkers</a>: <i>Integer</i>
</pre>

## Properties

#### MinWorkers

The minimum number of workers to which the cluster can scale down when underutilized. It is also the initial number of workers the cluster will have after creation.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxWorkers

The maximum number of workers to which the cluster can scale up when overloaded. max_workers must be strictly greater than min_workers.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

