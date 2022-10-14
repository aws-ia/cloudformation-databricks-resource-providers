# Databricks::Clusters::Job Task

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#taskkey" title="TaskKey">TaskKey</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#dependson" title="DependsOn">DependsOn</a>" : <i>[ String, ... ]</i>,
    "<a href="#existingclusterid" title="ExistingClusterId">ExistingClusterId</a>" : <i>String</i>,
    "<a href="#notebooktask" title="NotebookTask">NotebookTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#sparkjartask" title="SparkJarTask">SparkJarTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#sparkpythontask" title="SparkPythonTask">SparkPythonTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#sparksubmittask" title="SparkSubmitTask">SparkSubmitTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#pipelinetask" title="PipelineTask">PipelineTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#pythonwheeltask" title="PythonWheelTask">PythonWheelTask</a>" : <i><a href="task.md">Task</a></i>,
    "<a href="#libraries" title="Libraries">Libraries</a>" : <i>[ Map, ... ]</i>,
    "<a href="#emailnotifications" title="EmailNotifications">EmailNotifications</a>" : <i><a href="emailnotifications.md">EmailNotifications</a></i>,
    "<a href="#timeoutseconds" title="TimeoutSeconds">TimeoutSeconds</a>" : <i>Integer</i>,
    "<a href="#maxretries" title="MaxRetries">MaxRetries</a>" : <i>Integer</i>,
    "<a href="#minretryintervalmillies" title="MinRetryIntervalMillies">MinRetryIntervalMillies</a>" : <i>Integer</i>,
    "<a href="#retryontimeout" title="RetryOnTimeout">RetryOnTimeout</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#taskkey" title="TaskKey">TaskKey</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#dependson" title="DependsOn">DependsOn</a>: <i>
      - String</i>
<a href="#existingclusterid" title="ExistingClusterId">ExistingClusterId</a>: <i>String</i>
<a href="#notebooktask" title="NotebookTask">NotebookTask</a>: <i><a href="task.md">Task</a></i>
<a href="#sparkjartask" title="SparkJarTask">SparkJarTask</a>: <i><a href="task.md">Task</a></i>
<a href="#sparkpythontask" title="SparkPythonTask">SparkPythonTask</a>: <i><a href="task.md">Task</a></i>
<a href="#sparksubmittask" title="SparkSubmitTask">SparkSubmitTask</a>: <i><a href="task.md">Task</a></i>
<a href="#pipelinetask" title="PipelineTask">PipelineTask</a>: <i><a href="task.md">Task</a></i>
<a href="#pythonwheeltask" title="PythonWheelTask">PythonWheelTask</a>: <i><a href="task.md">Task</a></i>
<a href="#libraries" title="Libraries">Libraries</a>: <i>
      - Map</i>
<a href="#emailnotifications" title="EmailNotifications">EmailNotifications</a>: <i><a href="emailnotifications.md">EmailNotifications</a></i>
<a href="#timeoutseconds" title="TimeoutSeconds">TimeoutSeconds</a>: <i>Integer</i>
<a href="#maxretries" title="MaxRetries">MaxRetries</a>: <i>Integer</i>
<a href="#minretryintervalmillies" title="MinRetryIntervalMillies">MinRetryIntervalMillies</a>: <i>Integer</i>
<a href="#retryontimeout" title="RetryOnTimeout">RetryOnTimeout</a>: <i>Boolean</i>
</pre>

## Properties

#### TaskKey

A unique name for the task. This field is used to refer to this task from other tasks. This field is required and must be unique within its parent job. On Update or Reset, this field is used to reference the tasks to be updated or reset. The maximum length is 100 characters.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

An optional description for this task. The maximum length is 4096 bytes.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DependsOn

An optional array of objects specifying the dependency graph of the task. All tasks specified in this field must complete successfully before executing this task. The key is task_key, and the value is the name assigned to the dependent task. This field is required when a job consists of more than one task.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ExistingClusterId

If existing_cluster_id, the ID of an existing cluster that is used for all runs of this task. When running tasks on an existing cluster, you may need to manually restart the cluster if it stops responding. We suggest running jobs on new clusters for greater reliability.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotebookTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkJarTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkPythonTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SparkSubmitTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PipelineTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PythonWheelTask

_Required_: No

_Type_: <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Libraries

An optional list of libraries to be installed on the cluster that executes the task. The default value is an empty list.

_Required_: No

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailNotifications

_Required_: No

_Type_: <a href="emailnotifications.md">EmailNotifications</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TimeoutSeconds

An optional timeout applied to each run of this job task. The default behavior is to have no timeout.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxRetries

An optional maximum number of times to retry an unsuccessful run. A run is considered to be unsuccessful if it completes with the FAILED result_state or INTERNAL_ERROR life_cycle_state. The value -1 means to retry indefinitely and the value 0 means to never retry. The default behavior is to never retry.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinRetryIntervalMillies

An optional minimal interval in milliseconds between the start of the failed run and the subsequent retry run. The default behavior is that unsuccessful runs are immediately retried.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RetryOnTimeout

An optional policy to specify whether to retry a task when it times out. The default behavior is to not retry on timeout.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

