---
sidebar_position: 3
---

# Start development server

The `npm run dev` command starts the Orion server in development mode with live-reloading & routes visualization enabled. It uses `nodemon` to monitor changes in the codebase and automatically restarts the server when changes are detected.

## Usage

```bash
>>> npm run dev
```

## Purpose
This command is used during the development phase to facilitate testing and debugging. It automatically reloads the server upon any code changes. Additionally, the development server enables a `/visualize` route, allowing you to view detailed information about the routes.

:::info Note
To switch to development mode, set the `ENVIRONMENT` constant to `"development"`.
:::

## Output

```bash
>>> npm run dev

> orion@1.0.0 dev
> nodemon index.js

[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
[INFO] Visit /visualize to see information about the routes.
[INFO] Server running on port 3000.
```