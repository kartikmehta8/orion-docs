---
sidebar_position: 1
---

# Body Parser

## Purpose
This middleware is used to handle parsing of incoming JSON and URL-encoded bodies in `Express.js`. It simplifies request body parsing for APIs.

## Key Features
- Parses JSON bodies automatically using the `body-parser` package.
- Parses URL-encoded form data automatically.

:::tip From the creator
Remember, if you decide you no longer need a middleware, simply delete the file. **Out of necessity, out of existence!**
:::

## Customization
You can configure the `extended` option for URL-encoded data:
- `extended: true` allows for rich objects and arrays to be encoded.
- `extended: false` allows for simple key-value pairs.

```bash
Location: src/middlewares/bodyParserMiddleware.js
```

Visit the **[official documentation](https://www.npmjs.com/package/body-parser)** for more information.
