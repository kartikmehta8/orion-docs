---
sidebar_position: 4
---

# Generate services

The `npm run generate` command facilitates the creation of new routes, controllers, or modules by automating their integration into the project structure. Don't be concerned about the boilerplate code; we will guide you through its contents and show you how to incorporate your existing logic seamlessly. 

We assure you, the process is straightforward! ⭐

## Usage

```bash
>>> npm run generate <type> <name>
```

- `<type>`: The type of component you want to generate (`route`, `controller`, or `module`).
- `<name>`: The name of the component.

:::tip From the creator
A **module** combines a route and a controller into one package. Running this command will create both a route and its corresponding controller, naming them as specified.
:::

## Purpose
The `generate` command helps developers avoid the hassle of manually creating files and registering them. Instead, it automatically generates standardized files with a predefined structure.

Check out the [TODO] section to learn how to create and apply your own controllers and routes.

## Output

### Module
```bash
# Generate a new route and controller named 'user'.
>>> npm run generate module user

[SUCCESS] Generated controller: /src/controllers/UserController.js
[SUCCESS] Generated route:      /src/routes/UserRoute.js
[SUCCESS] Generated module with controller and route for: user
```

This command generates a `UserController.js` and `UserRoute.js` file and automatically sets them up in the project. 

Setting up your first route and controller is quite straightforward, isn't it? We told you so! Go to `/visualize` for more details about them.

### Route
```bash
# Generate a new route named 'user'.
>>> npm run generate route user

[SUCCESS] Generated route: /src/routes/UserRoute.js
```

### Controller
```bash
# Generate a new controller named 'user'.
>>> npm run generate controller user

[SUCCESS] Generated controller: /src/controllers/UserController.js
```
