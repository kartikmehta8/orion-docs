---
sidebar_position: 3
---

# Folder Structure

The Orion project is organized into a well-defined folder structure to maintain modularity, scalability, and clear separation of concerns.

```bash
orion
├── cli
├── src
│   ├── config
│   ├── constants
│   ├── controllers
│   ├── interfaces
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   └── visualization
└── templates
    └── databases
```

### **config**
  Contains configuration scripts for connecting to various databases (`MySQL`, `MongoDB`, `Redis`).
  - **Example File:** `mongoConfig.js`, `mysqlConfig.js`
  - **Purpose:** Ensures database configuration is separated from other logic and can be easily managed and modified.

### **constants**
  This folder holds constant values such as HTTP status codes, error messages, and API-related configurations.
  - **Example File:** `httpStatusCodes.js`, `errors.js`
  - **Purpose:** Centralizes all constant values to avoid "magic numbers" or strings and to promote consistency.

### **controllers**
  Houses the controller classes that define the business logic for each API endpoint.
  - **Example File:** `UserController.js`
  - **Purpose:** Manages the core business logic for various API endpoints.

### **interfaces**
  Contains abstract classes and interfaces that enforce a consistent structure throughout the project.
  - **Example File:** `IDatabase.js`, `IMiddleware.js`
  - **Purpose:** Provides a standardized way to define classes, ensuring they adhere to a common structure or pattern.

### **middlewares**
  Stores middleware classes that handle various tasks such as logging, security, and body parsing.
  - **Example File:** `bodyParserMiddleware.js`, `corsMiddleware.js`
  - **Purpose:** Manages cross-cutting concerns such as request validation, security & rate-limiting. 

### **models**
  Placeholder for future database models. This folder can be used to define data structures and schema logic if an ORM is used.
  - **Example File:** `userModel.js`
  - **Purpose:** Provides a dedicated space to define database models when required.

### **routes**
  Contains route definitions that map URL paths to specific controller actions.
- **Example File:** `UserRoutes.js`
- **Purpose:** Separates route definitions from business logic to keep the code organized and modular.

### **utils**
  Contains utility classes and helper functions used across the project.
  - **Example File:** `Logger.js`, `Singleton.js`
  - **Purpose:** Manages common functions and utilities that are used in multiple places throughout the codebase.

### **templates**
  Holds template files that the CLI uses to generate new routes, controllers, and database connection scripts.
  - **Example Files:** `controller.js`, `route.js`
  - **Purpose:** Provides predefined templates that ensure consistency in generated files.

### **visualization**
  Stores files related to the route visualization feature.

### **cli**
  This folder contains the command-line interface (CLI) scripts for generating routes, controllers, and other components, as well as configuring databases.

### **Project Root Files**
  - **`app.js`**: The main application file that initializes and starts the Express server. It loads configurations, routes, middlewares, and manages the lifecycle of the server.
  - **`index.js`**: The entry point that creates an instance of the app and starts the server.
  - **`.prettierrc`**: Configures Prettier for code formatting standards.
  - **`package.json`** and **`package-lock.json`**: Contain metadata about the project, including dependencies, scripts, and configurations.
  - **`.env.sample`** serves as a reference for developers to create their own `.env` file.