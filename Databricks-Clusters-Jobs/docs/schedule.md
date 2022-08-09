# Databricks::Clusters::Jobs Schedule

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#quartzcronexpression" title="QuartzCronExpression">QuartzCronExpression</a>" : <i>String</i>,
    "<a href="#timezoneid" title="TimezoneId">TimezoneId</a>" : <i>String</i>,
    "<a href="#pausestatus" title="PauseStatus">PauseStatus</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#quartzcronexpression" title="QuartzCronExpression">QuartzCronExpression</a>: <i>String</i>
<a href="#timezoneid" title="TimezoneId">TimezoneId</a>: <i>String</i>
<a href="#pausestatus" title="PauseStatus">PauseStatus</a>: <i>String</i>
</pre>

## Properties

#### QuartzCronExpression

A Cron expression using Quartz syntax that describes the schedule for a job. See Cron Trigger for details. This field is required.



_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TimezoneId

A Java timezone ID. The schedule for a job is resolved with respect to this timezone. See Java TimeZone for details. This field is required.



_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PauseStatus

Indicate whether this schedule is paused or not.

_Required_: No

_Type_: String

_Allowed Values_: <code>PAUSED</code> | <code>UNPAUSED</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

