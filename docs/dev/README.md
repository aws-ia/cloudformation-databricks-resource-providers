# cloudformation-databricks

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the Databricks token to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
    "DatabricksAccess": {
        "DatabricksInstance": [Instance url],
        "Token": [Databricks personal access token]
    }
}
EOF
```

See [Authentication using Databricks personal access tokens](https://docs.databricks.com/dev-tools/api/latest/authentication.html)

You must have a Databricks account to run these tests.

## Testing

Some of the contract tests for specific resources require pre-configured setup.  This is documented in the README.md files of those resources.
