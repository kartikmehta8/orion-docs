---
sidebar_position: 2
---

# CORS

## Purpose
Enables *Cross-Origin Resource Sharing (CORS)* to allow or restrict resources on a web server depending on the originating domain.

## Key Features
- Uses the popular `cors` package to enable CORS in the Express app.
- Ensures easy handling of cross-domain requests for APIs.

## Customization
You can pass options to the cors function such as:
- `origin`: Configures which domains can access your API.
- `methods`: Defines allowed HTTP methods.

```bash
Location: src/middlewares/corsMiddleware.js
```

Visit the **[official documentation](https://www.npmjs.com/package/cors)** for more information.
