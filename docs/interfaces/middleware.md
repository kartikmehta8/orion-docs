---
sidebar_position: 2
---

# Middleware Interface

```bash
Location: src/interfaces/IMiddleware.js
```

## Purpose
The `IMiddleware` interface provides a consistent structure for middleware components in Orion. The interface enforces a single method, `handle`, which each middleware must implement.

## Key Features
- **Abstract Base Class:** Prevents direct instantiation, requiring middleware classes to subclass and implement handle.
- **Consistent Method Signature:** The `handle` method provides a unified way to process incoming requests.
- **Easy Extensibility:** Developers can easily create custom middleware with predictable behavior.

## Method Descriptions

- `constructor()`:
    - **Utility:** Initializes the middleware interface.
    - **Purpose:** Ensures that IMiddleware cannot be instantiated directly. Throws an error if an instance of IMiddleware is created without subclassing.
    - **Why?:** This restriction enforces subclassing, promoting a consistent structure and requiring subclasses to define middleware-specific behavior in the handle method.

- `handle(req, res, next)`:
    - **Utility:** Processes incoming HTTP requests.
    - **Purpose:** This abstract method must be implemented by subclasses. It receives the `req`, `res`, and `next` parameters to handle the request, response, and the next middleware in the stack.
    - **Why?:** By enforcing the handle method, the interface ensures that all middleware subclasses provide a standardized approach to request handling, making middleware easier to understand and manage.
