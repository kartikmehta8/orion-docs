---
sidebar_position: 2
---

# Start production server

The `npm start` command is the default script for starting the Orion server in production mode. This command runs the server using Node.js without the additional development features such as live-reloading.

## Usage

```bash
>>> npm start
```

## Purpose
This command is typically used to run the Orion server in a production or staging environment. It starts the server by executing the `index.js` file.

- **No Live-Reload:** The server runs without any development features such as hot-reloading and routes visualization.
- **Configuration:** It uses the environment variables set in the `.env` file to configure server behavior.

:::info Note
Remember to change `ENVIRONMENT="production"` in `.env`.
:::

- **Logging:** All output and errors are logged using the custom Logger utility.

## Output

```bash
>>> npm start

> orion@1.0.0 start
> node index.js

[INFO] Server running on port 3000.
```