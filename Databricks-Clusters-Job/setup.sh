#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/DATABRICKS_CLUSTER_ID/${DATABRICKS_CLUSTER_ID}/g" | sed "s/DATABRICKS_USERNAME/${DATABRICKS_USERNAME}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json | sed "s/DATABRICKS_CLUSTER_ID/${DATABRICKS_CLUSTER_ID}/g" | sed "s/DATABRICKS_USERNAME/${DATABRICKS_USERNAME}/g" > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json | sed "s/DATABRICKS_CLUSTER_ID/${DATABRICKS_CLUSTER_ID}/g" | sed "s/DATABRICKS_USERNAME/${DATABRICKS_USERNAME}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/DATABRICKS_CLUSTER_ID/${DATABRICKS_CLUSTER_ID}/g" | sed "s/DATABRICKS_USERNAME/${DATABRICKS_USERNAME}/g" > test/integ.yml
