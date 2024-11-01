---
sidebar_position: 1
---

# Write your own Endpoint

Orion is designed to make the creation and organization of routes and controllers simple and modular. With the `npm generate module` command, you can scaffold new modules *(a route-controller pair)* in seconds, giving you a consistent structure for handling specific resources in your application.

1. **Generating a New Module**: Using the CLI to quickly scaffold a new controller and route.
2. **Adding CRUD Endpoints**: Implementing common operations (GET, POST, PUT, DELETE) for your new resource.

## Step 1: Generating a New Module

To create a new module in Orion, use the following CLI command:

```bash
>>> npm run generate module <resourceName>
```

Replace `<resourceName>` with the name of the resource you want to create. For example, to create a module for `user`, you would run:

```bash
>>> npm run generate module user
```

This command will generate two files:

- **Controller:** `src/controllers/UserController.js`
- **Route:** `src/routes/UserRoute.js`

## Step 2: Implementing CRUD Operations
Now that we have our base `UserController` and `UserRoute` files, let’s extend them to handle common CRUD operations (`GET`, `POST`, `PUT`, `DELETE`).

### 1. Add a POST Route for Creating a User

**Controller:** `UserController.create`
Add the create method in `UserController.js`:

```js
static async create(req, res) {
	try {
		const userData = req.body;
		// Example logic to create a user
		res.status(httpStatusCodes.CREATED).json({
			message: 'User created successfully',
			data: userData, // This would normally be the new user data returned from a DB.
		});
	} catch (error) {
		res.status(httpStatusCodes.SERVER_ERROR).json({
			error: errors.GENERAL.SERVER_ERROR,
		});
	}
}
```

**Route: Add POST** `/user` **Route**
In `UserRoute.js`, add the new route:

```js
router.post('/', UserController.create);
```

### 2. Add a PUT Route for Updating a User

**Controller:** `UserController.update`
Add the update method in `UserController.js`:

```js
static async update(req, res) {
	try {
		const id = req.params.id;
		const userData = req.body;

		if (!id) {
			return res
				.status(httpStatusCodes.BAD_REQUEST)
				.json({ error: errors.GENERAL.INVALID_ID });
		}

		// Example logic to update user.
		res.status(httpStatusCodes.SUCCESS).json({
			message: `User with ID: ${id} updated successfully`,
			data: userData, // Updated user data.
		});
	} catch (error) {
		res.status(httpStatusCodes.SERVER_ERROR).json({
			error: errors.GENERAL.SERVER_ERROR,
		});
	}
}
```

**Route: Add PUT** `/user/:id` **Route**
In `UserRoute.js`, add the new route:

```js
router.put('/:id', UserController.update);
```
### 3. Add a DELETE Route for Deleting a User

**Controller:** `UserController.delete`
Add the delete method in `UserController.js`:

```js
static async delete(req, res) {
	try {
		const id = req.params.id;

		if (!id) {
			return res
				.status(httpStatusCodes.BAD_REQUEST)
				.json({ error: errors.GENERAL.INVALID_ID });
		}

		// Example logic to delete a user.
		res.status(httpStatusCodes.SUCCESS).json({
			message: `User with ID: ${id} deleted successfully`,
		});
	} catch (error) {
		res.status(httpStatusCodes.SERVER_ERROR).json({
			error: errors.GENERAL.SERVER_ERROR,
		});
	}
}
```

**Route: Add DELETE** `/user/:id` **Route**
In `UserRoute.js`, add the new route:

```js
router.delete('/:id', UserController.delete);
```

:::info Note
Go to `/visualize` to see the details about them, which are added automatically.
:::

Using Orion’s modular structure and CLI commands, you can quickly create and extend routes and controllers for new resources, following a standardized and consistent pattern.