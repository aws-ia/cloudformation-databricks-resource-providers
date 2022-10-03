# Databricks::Clusters::Jobs EmailNotifications

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#onstart" title="OnStart">OnStart</a>" : <i>[ String, ... ]</i>,
    "<a href="#onsuccess" title="OnSuccess">OnSuccess</a>" : <i>[ String, ... ]</i>,
    "<a href="#onfailure" title="OnFailure">OnFailure</a>" : <i>[ String, ... ]</i>,
    "<a href="#noalertforskippedruns" title="NoAlertForSkippedRuns">NoAlertForSkippedRuns</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#onstart" title="OnStart">OnStart</a>: <i>
      - String</i>
<a href="#onsuccess" title="OnSuccess">OnSuccess</a>: <i>
      - String</i>
<a href="#onfailure" title="OnFailure">OnFailure</a>: <i>
      - String</i>
<a href="#noalertforskippedruns" title="NoAlertForSkippedRuns">NoAlertForSkippedRuns</a>: <i>Boolean</i>
</pre>

## Properties

#### OnStart

A list of email addresses to be notified when a run begins. If not specified on job creation, reset, or update, the list is empty, and notifications are not sent.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OnSuccess

A list of email addresses to be notified when a run successfully completes. A run is considered to have completed successfully if it ends with a TERMINATED life_cycle_state and a SUCCESSFUL result_state. If not specified on job creation, reset, or update, the list is empty, and notifications are not sent.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OnFailure

A list of email addresses to be notified when a run unsuccessfully completes. A run is considered to have completed unsuccessfully if it ends with an INTERNAL_ERROR life_cycle_state or a SKIPPED, FAILED, or TIMED_OUT result_state. If this is not specified on job creation, reset, or update the list is empty, and notifications are not sent.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NoAlertForSkippedRuns

If true, do not send email to recipients specified in on_failure if the run is skipped.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

