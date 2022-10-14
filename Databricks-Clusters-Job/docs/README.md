# Databricks::Clusters::Job

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Databricks::Clusters::Job",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#tags" title="Tags">Tags</a>" : <i>Map</i>,
        "<a href="#tasks" title="Tasks">Tasks</a>" : <i>[ <a href="task.md">Task</a>, ... ]</i>,
        "<a href="#emailnotifications" title="EmailNotifications">EmailNotifications</a>" : <i><a href="emailnotifications.md">EmailNotifications</a></i>,
        "<a href="#timeoutseconds" title="TimeoutSeconds">TimeoutSeconds</a>" : <i>Integer</i>,
        "<a href="#schedule" title="Schedule">Schedule</a>" : <i><a href="schedule.md">Schedule</a></i>,
        "<a href="#maxconcurrentruns" title="MaxConcurrentRuns">MaxConcurrentRuns</a>" : <i>Integer</i>,
        "<a href="#format" title="Format">Format</a>" : <i>String</i>,
        "<a href="#accesscontrollist" title="AccessControlList">AccessControlList</a>" : <i>[ <a href="accessuser.md">AccessUser</a>, ... ]</i>,
        "<a href="#existingclusterid" title="ExistingClusterId">ExistingClusterId</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Databricks::Clusters::Job
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#tags" title="Tags">Tags</a>: <i>Map</i>
    <a href="#tasks" title="Tasks">Tasks</a>: <i>
      - <a href="task.md">Task</a></i>
    <a href="#emailnotifications" title="EmailNotifications">EmailNotifications</a>: <i><a href="emailnotifications.md">EmailNotifications</a></i>
    <a href="#timeoutseconds" title="TimeoutSeconds">TimeoutSeconds</a>: <i>Integer</i>
    <a href="#schedule" title="Schedule">Schedule</a>: <i><a href="schedule.md">Schedule</a></i>
    <a href="#maxconcurrentruns" title="MaxConcurrentRuns">MaxConcurrentRuns</a>: <i>Integer</i>
    <a href="#format" title="Format">Format</a>: <i>String</i>
    <a href="#accesscontrollist" title="AccessControlList">AccessControlList</a>: <i>
      - <a href="accessuser.md">AccessUser</a></i>
    <a href="#existingclusterid" title="ExistingClusterId">ExistingClusterId</a>: <i>String</i>
</pre>

## Properties

#### Name

An optional name for the job.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

A map of tags associated with the job. These are forwarded to the cluster as cluster tags for jobs clusters, and are subject to the same limitations as cluster tags. A maximum of 25 tags can be added to the job.

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tasks

A list of task specifications to be executed by this job.

_Required_: No

_Type_: List of <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailNotifications

_Required_: No

_Type_: <a href="emailnotifications.md">EmailNotifications</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TimeoutSeconds

An optional timeout applied to each run of this job. The default behavior is to have no timeout.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Schedule

_Required_: No

_Type_: <a href="schedule.md">Schedule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxConcurrentRuns

An optional maximum allowed number of concurrent runs of the job.

Set this value if you want to be able to execute multiple runs of the same job concurrently. This is useful for example if you trigger your job on a frequent schedule and want to allow consecutive runs to overlap with each other, or if you want to trigger multiple runs which differ by their input parameters.

This setting affects only new runs. For example, suppose the job's concurrency is 4 and there are 4 concurrent active runs. Then setting the concurrency to 3 won't kill any of the active runs. However, from then on, new runs are skipped unless there are fewer than 3 active runs.

This value cannot exceed 1000. Setting this value to 0 causes all new runs to be skipped. The default behavior is to allow only 1 concurrent run.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Format

Used to tell what is the format of the job. This field is ignored in Create/Update/Reset calls. When using the Jobs API 2.1 this value is always set to "MULTI_TASK".

_Required_: No

_Type_: String

_Allowed Values_: <code>SINGLE_TASK</code> | <code>MULTI_TASK</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AccessControlList

List of permissions to set on the job.

_Required_: No

_Type_: List of <a href="accessuser.md">AccessUser</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ExistingClusterId

If existing_cluster_id, the ID of an existing cluster that is used for all runs of this task. When running tasks on an existing cluster, you may need to manually restart the cluster if it stops responding. We suggest running jobs on new clusters for greater reliability.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the JobId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### JobId

Returns the <code>JobId</code> value.

#### CreatedTime

Returns the <code>CreatedTime</code> value.

