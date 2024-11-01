---
sidebar_position: 3
---

# Custom Middleware

Orion's modular middleware system makes it easy to add custom middlewares. By extending the `IMiddleware` interface, you ensure that your middleware follows a consistent structure across the application.

In this example, we’ll walk through creating a middleware for **response compression** using the [compression](https://www.npmjs.com/package/compression) package. Compression is a popular middleware in Express apps that helps reduce the size of response bodies, making your application faster and saving bandwidth.

## Steps to Add Custom Middleware

### 1. Install the `compression` Package

First, install the `compression` package via npm:

```bash
>>> npm install compression
```

### 2. Create a Middleware File
Next, create a new middleware file in the src/middlewares folder. For example, `CompressionMiddleware.js`.

### 3. Extend IMiddleware
Extend the IMiddleware class and implement the `handle` method to define the compression logic. This ensures our middleware follows the same structure as other middlewares in the project.

### 4. Customize Middleware Logic
Inside the handle method, configure the compression middleware. You can customize the options as per your application's needs.

```js
// src/middlewares/CompressionMiddleware.js
const IMiddleware = require('../interfaces/IMiddleware');
const compression = require('compression');

// Visit https://www.npmjs.com/package/compression for more information.
class CompressionMiddleware extends IMiddleware {
	handle(req, res, next) {
	  // Apply compression with default settings. You can pass options to customize the compression.
	  return compression()(req, res, next);
	}
}

module.exports = (req, res, next) =>
	new CompressionMiddleware().handle(req, res, next);
```

That's it! Orion’s dynamic middleware loader will automatically include it in the application.

:::tip From the creator
You don’t need to manually add it to `app.js` — just drop it in the folder, and Orion takes care of the rest.
:::
