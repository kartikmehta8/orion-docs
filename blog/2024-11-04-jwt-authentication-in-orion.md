---
slug: jwt-authentication-in-orion
title: JWT Authentication in Orion
authors: [mehta]
tags: [jwt, authentication]
---

Welcome! This guide will walk you through setting up a login system with JWT authentication and MongoDB using the Orion framework. I’ll cover:

1. **Generating a MongoDB configuration** with Orion’s CLI.
2. **Creating user routes and controllers** with Orion’s command to handle authentication.
3. **Implementing middleware** that verifies JWTs and integrates with Orion’s IMiddleware interface.

Let’s get started!

<!-- truncate -->

:::tip From the creator
I hope you've already initiated the project. If not, go to [this section](/docs/installation/step-by-step-guide) and return here quickly. I promise, it won't take more than 5 minutes.
:::

### Step 1: Configure MongoDB

Start by configuring MongoDB with Orion’s CLI command.

1. Run the following command to configure `MongoDB`:

```bash
>>> npm run config mongo
```

2. You’ll be prompted to enter details for MongoDB, such as the `MONGO_URI` and `MONGO_DB_NAME`. Complete the configuration as prompted. The configuration will generate a `mongoConfig.js` file in the `src/config` directory, connecting MongoDB to the application. Confirm this by running the server in `development` mode.

```bash
>>> npm run config mongo

>>> MongoDB Connection URI: mongodb://localhost:27017
>>> MongoDB Database Name: auth
[SUCCESS] Configuration script created at src/config/mongoConfig.js

# Start the server in development mode.
>>> npm run dev

[INFO] Visit /visualize to see information about the routes.
[INFO] Server running on port 3000.
[SUCCESS] Connection successful: MongoDB
```

### Step 2: Generate User Controller and Routes

Now, generate a module for handling user authentication. This command will create both a controller and route files with basic templates.

1. Run:

```bash
>>> npm run generate module user
```

2. This will create:
- `UserController.js` in `src/controllers` with a sample controller structure.
- `UserRoute.js` in `src/routes` with a sample route structure.

```bash
>>> npm run generate module user

> node ./cli/index.js generate module user
[SUCCESS] Generated controller: src/controllers/UserController.js
[SUCCESS] Generated route: src/routes/UserRoute.js
[SUCCESS] Generated module with controller and route for: user
```

### Step 3: Define the User Model

1. In `src/models`, create a file named `User.js`.
2. In `User.js`, implement the user model with `mongodb` native methods.

Here’s the complete code for `User.js`:

```js
/**
 * @file User.js
 * @description Provides methods for interacting with the `users` collection in MongoDB.
 */

// Import MongoDB connection instance.
const MongoDBConnection = require('../config/mongoConfig');
// Allows usage of ObjectId in MongoDB.
const { ObjectId } = require('mongodb'); 

class User {
  constructor(data) {
    this.email = data.email;
    this.password = data.password;
  }

  /**
   * Inserts a new user into the database.
   * @returns {Promise<Object>} The newly created user document.
   */
  async save() {
    const db = MongoDBConnection.getClient().db(process.env.MONGO_DB_NAME);
    const result = await db.collection('users').insertOne(this);
    return result;
  }

  /**
   * Finds a user by their email.
   * @param {string} email - The email of the user to find.
   * @returns {Promise<Object|null>} The user document or null if not found.
   */
  static async findByEmail(email) {
    const db = MongoDBConnection.getClient().db(process.env.MONGO_DB_NAME);
    return await db.collection('users').findOne({ email });
  }

  /**
   * Finds a user by their ID.
   * @param {string} id - The ID of the user to find.
   * @returns {Promise<Object|null>} The user document or null if not found.
   */
  static async findById(id) {
    const db = MongoDBConnection.getClient().db(process.env.MONGO_DB_NAME);
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
  }
}

module.exports = User;
```

With the `User` model in place, you can now use it in `UserController.js` to handle signup and login.

### Step 4: Update the Controller for Signup and Login

1. Install Dependencies
First, let's install the dependencies we're going to use.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**: Securely hashes passwords using the bcrypt algorithm for protecting user credentials.
- **[Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Implements JSON Web Token (JWT) for secure transmission of information between parties as a JSON object.

```bash
>>> npm install bcrypt jsonwebtoken
```

2. Add `JWT_SECRET` environment variable in `.env`.

```
JWT_SECRET='orion' # Change the value.
```

3. Edit `UserController.js` to add methods for signup and login. Use `bcrypt` to hash passwords and `jsonwebtoken` to create JWTs.

In `src/controllers/UserController.js`, modify as follows:

```js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const httpStatusCodes = require('../constants/httpStatusCodes');
const errors = require('../constants/errors');

class UserController {
  /**
   * Handles user signup: hashes the password and saves the new user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @async
   */
  static async signup(req, res) {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ email, password: hashedPassword });
      const savedUser = await user.save();

      res.status(httpStatusCodes.CREATED).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
      res.status(httpStatusCodes.SERVER_ERROR).json({ error: errors.GENERAL.SERVER_ERROR });
    }
  }

  /**
   * Handles user login: verifies credentials and generates a JWT.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @async
   */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(httpStatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(httpStatusCodes.SUCCESS).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(httpStatusCodes.SERVER_ERROR).json({ error: errors.GENERAL.SERVER_ERROR });
    }
  }
}

module.exports = UserController;
```

### Step 5: Update the User Route for Signup and Login

In `src/routes/UserRoute.js`, add the routes for signup and login. This will allow users to register and log in using the endpoints `/signup` and `/login`.

```js
// Existing code.
const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = {
// Existing code.
```

:::info Note
Anytime you want to view the number of routes in your system along with additional details, visit the `/visualize` route.
:::

### Step 6: Create a JWT Authentication Middleware

Create a new middleware that verifies the JWT for each incoming request, ensuring only authenticated users can access protected routes. This middleware will implement the `IMiddleware` interface.

In `src/middlewares/authMiddleware.js`, add:

```js
const jwt = require('jsonwebtoken');
const httpStatusCodes = require('../constants/httpStatusCodes');
const settings = require('../constants/general');
const IMiddleware = require('../interfaces/IMiddleware');

class AuthMiddleware extends IMiddleware {
  /**
   * Verifies the JWT token in the request header to authenticate the user.
   * @param {object} req    - Express request object.
   * @param {object} res    - Express response object.
   * @param {function} next - Express next middleware function.
   */
  handle(req, res, next) {
    
    // Check if route is protected, if not, skip authentication and it does not starts with /visualize/
    const routeStartsWithVisualize = req.originalUrl.startsWith('/visualize/');
    if (req.originalUrl === settings.GENERAL.API_PREFIX + '/login' || req.originalUrl === settings.GENERAL.API_PREFIX + '/signup' || routeStartsWithVisualize ) {
      return next();
    }

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(httpStatusCodes.UNAUTHORIZED).json({ error: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;  // Add the user object to the request.
      next();
    } catch (error) {
      res.status(httpStatusCodes.UNAUTHORIZED).json({ error: 'Invalid token.' });
    }
  }
}

module.exports = (req, res, next) => new AuthMiddleware().handle(req, res, next);
```

### Step 7: Testing the Setup

1. Signup: Send a `POST` request to `/api/v1/user/signup` with email and password in the request body.
2. Login: Send a `POST` request to `/api/v1/user/login` with the same credentials. This will return a JWT token if the credentials are correct.
3. Access Protected Route: Send a GET request to `/api/v1/sample/` (already created in a template), including the JWT token in the Authorization header as Bearer `<token>`. If the token is valid, access will be granted.

---

With this, you have successfully set up a complete login system with JWT authentication and MongoDB using Orion!