---
sidebar_position: 6
---

# Using Prettier

The `npm run prettier` command applies formatting to all code files based on Prettier's configuration settings. This ensures uniform code style throughout the project. The configuration details are specified in the `.prettierrc` file.

## Usage

```bash
>>> npm run prettier
```

## Purpose
This command is used to enforce code style guidelines in the project. It automatically formats all `.js`, `.json`, `.md`, and other supported files based on Prettier’s configuration.

:::info Information
`npm run prettier:check` checks the codebase for any formatting issues based on Prettier’s configuration.
:::

## Output 

```bash
# Format all files in the project.
>>> npm run prettier

app.js 17ms (unchanged)
cli/config.js 10ms (unchanged)
...
...
templates/databases/redisConnection.js 2ms (unchanged)
templates/route.js 1ms (unchanged)
```
