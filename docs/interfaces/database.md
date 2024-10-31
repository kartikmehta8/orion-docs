---
sidebar_position: 1
---

# Database Interface

```bash
Location: src/interfaces/IDatabase.js
```

## Purpose
The `DatabaseInterface` interface provides a blueprint for creating database connection classes in Orion. By standardizing essential functions like `connect`, `getClient`, and `close`, this interface ensures consistent database management across the application. Additionally, by extending the `Singleton` utility, it enforces the singleton pattern, making sure only one instance of a database connection exists.

## Key Features
- **Singleton Pattern:** Only one instance per database connection class, promoting efficient resource usage.
- **Standardized Methods:** Requires subclasses to implement key methods for managing database connections.
- **Type Safety**: Prevents direct instantiation, making it impossible to use the interface without subclassing and implementing required methods.

## Method Descriptions

- `constructor()`:
    - **Utility:** Initializes the database interface instance.
    - **Purpose:** Ensures that `DatabaseInterface` cannot be instantiated directly. If an attempt is made to instantiate it without subclassing, it throws an error.
    - **Why?:** Enforcing this restriction encourages developers to create database connection subclasses tailored to specific database types.

- `connect()`:
    - **Utility:** Establishes a connection to the database.
    - **Purpose:** This is an abstract method that must be implemented by any subclass. The specific connection logic for the database should be defined here.
    - **Why?:** A standardized connect method ensures that every database connection class provides a way to open a connection, following a predictable pattern across the application.

- `getClient()`:
    - **Utility:** Retrieves the database client instance.
    - **Purpose:** This method is abstract and must be implemented in subclasses. It provides access to the raw client or connection object, enabling interaction with the database.
    - **Why?:** Accessing the client directly is essential for executing queries or commands. This method ensures that all subclasses expose a getClient method for consistent database interactions.

- `close()`:
    - **Utility:** Closes the database connection.
    - **Purpose:** Another abstract method, requiring subclasses to implement specific logic for closing the database connection.
    - **Why?:** Properly closing database connections helps prevent memory leaks and connection saturation.

:::info Information
Orion offers flexibility for you to extend and establish your own database connections. We've detailed how to do this in the `Extension Guide`.
:::