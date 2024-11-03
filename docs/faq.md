---
sidebar_position: 5
---

# FAQs

### What is Orion, and how does it differ from other backend frameworks?
Orion is a Node.js-based framework designed for extensibility, modularity, and ease of setup. Unlike traditional frameworks, it provides **plug-and-play** components, and a CLI to simplify common backend tasks.

### How do I configure multiple databases with Orion?
Orion supports easy configuration of MySQL, MongoDB, and Redis using the `config` command. Simply run:
   ```bash
   >>> npm run config <db_type>
   ```
Replace `<db_type>` with the type of database, such as `mongo`, `mysql`, or `redis`.

### What’s the purpose of the `generate` command in Orion CLI?
The `generate` command allows you to create templates for `controllers`, `routes`, or entire `modules`. For instance, to create a user module, you would use:
   ```bash
   >>> npm run generate module User
   ```
This creates boilerplate files for routes and controllers.

### Can I add custom middleware in Orion?
Yes, you can add custom middleware by creating a file in the `middlewares` directory. Orion dynamically loads all middleware files, so any file in this directory with the required structure will be recognized.

### How can I view all registered routes in my application?
In development mode, Orion supports route visualization at `/visualize`. It displays a list of all routes, methods, and handlers in your application for easy debugging and understanding of the API structure.

### How does Orion ensure a single database instance per application?
Orion uses the Singleton design pattern in its `DatabaseInterface` class, ensuring only one instance of each database connection. This reduces overhead and improves performance by reusing the same instance.

### How do I extend or customize a database connection?
You can extend the `DatabaseInterface` to implement custom database logic. Implement `connect`, `getClient`, and `close` methods for your custom database.

### Does Orion support environment-based configurations?
Yes, Orion uses `dotenv` to load environment variables. Define your environment-specific variables in a `.env` file, and Orion will load them accordingly.

### My question isn’t listed here. What can I do?
You can send an [email](mailto:kartikmehta202@gmail.com) or contact the [builder](https://mrmehta.in) directly via social media. I'm happy to answer your questions!
