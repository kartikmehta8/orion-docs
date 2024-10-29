---
sidebar_position: 5
---

# Configure Databases

The `npm run config` command is used to configure database connections for the Orion project. It allows developers to interactively set up database configurations for **MySQL**, **MongoDB**, **Redis**, or other supported databases.

- [Getting Started with MySQL](https://dev.mysql.com/doc/mysql-getting-started/en)
- [Install MongoDB](https://www.mongodb.com/docs/manual/installation)
- [Install Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis)

## Usage

```bash
>>> npm run config [dbType]
```

- `[dbType]`: The database type you want to configure (`mysql`, `mongo`, `redis`).

Next, it will prompt you to configure credentials according to the `dbType` you've chosen.

:::tip From the creator
No need to manually enter credentials in the `.env` file; we've taken care of it for you.
:::

## Purpose
The `config` command simplifies database setup by asking for connection details from the developer. It then updates the `.env` file and generates the necessary configuration scripts. If there's a mistake in the setup, the system will automatically remove the connection file for you.

## Output

:::info Keep in mind
- No longer need the database connection? Just **delete the connection file** in the `config` folder, and it's all gone!
- Don't worry about the core details right now; we'll dive into the inner workings in the next sections.
:::

### MongoDB
```bash
>>> npm run config mongo  

✔ MongoDB Connection URI: mongodb://localhost:27017
✔ MongoDB Database Name: orion
[SUCCESS] Configuration script created at src/config/mongoConfig.js
```

Now, start the server.
```bash
>>> npm run dev

[nodemon] starting `node index.js`
[INFO] Visit /visualize to see information about the routes.
[INFO] Server running on port 3000.
[SUCCESS] Connection successful: MongoDB
```

### MySQL
```bash
>>> npm run config mysql  

✔ MySQL Host: localhost
✔ MySQL User: root
✔ MySQL Password: [input is masked]
✔ MySQL Database Name: orion
[SUCCESS] Configuration script created at src/config/mysqlConfig.js
```

### Redis

```bash
>>> npm run config redis

✔ Redis Host: localhost
✔ Redis Port: 6379
[SUCCESS] Configuration script created at src/config/redisConfig.js
```