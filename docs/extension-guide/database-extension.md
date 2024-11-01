---
sidebar_position: 2
---

# Custom Database Connection

Orion’s database structure is designed to make database connections modular and consistent across the application. To add a new database connection, you need to create a class that extends `DatabaseInterface`, which ensures that your custom database connection follows a standardized pattern.

In this example, we’ll walk through creating a **PostgreSQL** connection class using the popular [pg](https://www.npmjs.com/package/pg) package.

## Steps to Add a Custom Database

### 1. Install the `pg` Package

First, install the `pg` package to enable PostgreSQL support:

```bash
>>> npm install pg
```

### 2. Create a Database Connection File
Next, create a new database connection file in the `src/config` folder. For example, `PostgresConfig.js`.

### 3. Extend `DatabaseInterface`
Extend the `DatabaseInterface` class to ensure that your connection class follows a consistent pattern. The `DatabaseInterface` enforces the singleton pattern, meaning only one instance of the database connection will be created throughout the application.

### 4. Define Connection Logic
Inside the `connect`, `getClient` & `close` methods, add the logic to handle appropriate functions.

Here’s how to set up a PostgresConfig file:

```js
// src/config/PostgresConfig.js
const { Client } = require('pg');
const DatabaseInterface = require('../interfaces/IDatabase');
const Logger = require('../utils/Logger');

class PostgresConfig extends DatabaseInterface {
	constructor() {
		super(); // Don't forget to call the super constructor.
		this.client = null;
	}

	async connect() {
		try {
			this.client = new Client({
				host: process.env.POSTGRES_HOST,
				user: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DB,
				port: process.env.POSTGRES_PORT,
			});
			await this.client.connect();
			Logger.success('Connection successful: PostgreSQL');
		} catch (error) {
			Logger.error('PostgreSQL connection failed!');
			throw error;
		}
	}

	getClient() {
		if (!this.client) {
			throw new Error(
				'PostgreSQL client not initialized. Call connect() first.'
			);
		}
		return this.client;
	}

	async close() {
		if (this.client) {
			await this.client.end();
			Logger.info('PostgreSQL connection closed.');
		}
	}
}

module.exports = new PostgresConfig();
```

### 5. Configure Environment Variables
To keep credentials secure and configurable, add PostgreSQL details to your `.env` file:

```bash
POSTGRES_HOST     =
POSTGRES_USER     =
POSTGRES_PASSWORD =
POSTGRES_DB       =
POSTGRES_PORT     =
```

Since Orion automatically loads files from the `src/config` directory, simply placing `PostgresConfig.js` in this directory will make it available throughout the application. Orion will recognize this file as a database connection and load it dynamically.

### 6. Use it anywhere

That's it! You are now ready to your new database client. Here's how:

```js
// Import the Object of the database and call the getClient as well.
const postgresClient = require('../config/PostgresConfig').getClient();

async function getUsers() {
	try {
    // Use it how you like!
		const res = await postgresClient.query('SELECT * FROM users');
		return res.rows;
	} catch (error) {
		throw new Error('Error fetching users: ' + error.message);
	}
}
```