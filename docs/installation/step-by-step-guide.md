---
sidebar_position: 2
---

# Initiation

Let’s get Orion up and running! Now that you’ve completed the prerequisites, let’s install and configure Orion for your development environment.

## 1. **Clone the Project**
Start by cloning the Orion's repository to your local machine.

```bash
>>> git clone https://github.com/kartikmehta8/orion.git
>>> cd orion # Get into the folder.
```

## 2. Install Dependencies
Run the following command to install all necessary dependencies.

```bash
>>> npm install
```
This will install all the packages defined in the package.json file.

## 3. Set Up Environment Variables
Orion uses environment variables to configure its settings. Create a `.env` file in the root of your project, or rename `.env.sample` to `.env`.

```bash
>>> touch .env
```

Your `.env` file should be structured as follows:

```
PORT=3000
ENVIRONMENT="development"
```

- **PORT:** Specifies the port on which the server should run.
- **ENVIRONMENT:** Indicates the environment mode, either `production` or `development`.

## 4. Run the Application
After setting up the environment variables, start the server.

```bash
>>> npm run dev  # For Development
OR
>>> npm start # For Production
```

This will start the Orion server on the specified port (default is `3000`). If everything is set up correctly, you should see a success message in your console.

```bash
[nodemon] starting `node index.js`
[INFO] Visit /visualize to see information about the routes.
[INFO] Server running on port 3000.
```

Congratulations! 🎉 

You’ve built a fully-fledged server with everything set up, from controllers and routers to middleware and databases. Follow the console messages to explore what’s happening at `/visualize`, and then return to discuss the commands that Orion offers.
