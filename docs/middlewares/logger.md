---
sidebar_position: 3
---

# Logger - Morgan

## Purpose
Logs incoming HTTP requests using the `morgan` library in a specified format.

## Key Feature
- Uses the `tiny` logging format by default, which includes basic information such as HTTP method, URL, status, and response time.

## Customization
You can switch to other predefined formats or define your own format:
- Predefined formats: `'tiny'`, `'combined'`, `'common'`, `'dev'`, etc.

```bash
Location: src/middlewares/loggerMiddleware.js
```

Visit the **[official documentation](https://www.npmjs.com/package/morgan)** for more information.
