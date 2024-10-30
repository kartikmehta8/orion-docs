---
sidebar_position: 4
---

# Rate Limiting

## Purpose
Limits the number of requests an IP can make to prevent abuse, brute-force attacks, or DoS attacks.

## Key Features
- Uses the `express-rate-limit` library to control the rate of incoming requests.
- Default rate limit is `100` requests per 15 minutes.

## Customization
Modify the `windowMs` and `max` options to adjust the rate limit:
- `windowMs`: The time window in milliseconds.
- `max`: The maximum number of requests an IP can make within the window.

```bash
Location: src/middlewares/rateLimitMiddleware.js
```

Visit the **[official documentation](https://www.npmjs.com/package/express-rate-limit)** for more information.
