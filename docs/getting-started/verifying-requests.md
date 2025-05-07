---
sidebar_position: 5
sidebar_label: "Verify Requests"
---

# Verifying Requests

When you monetize a URL with Proxy402, you need a way to ensure that all requests to your original content have been properly paid for. To prevent unauthorized access and verify that requests are coming through Proxy402, a special security header is included with every forwarded request.

## The Proxy402-Secret Header

Every time a paid request is forwarded to your original URL, Proxy402 adds a header:

```
Proxy402-Secret: YOUR_UNIQUE_SECRET
```

This secret is unique to your account and serves as proof that the request has passed through Proxy402 and payment has been verified.

## Finding Your Secret

You can find your Proxy402-Secret in the settings page:

1. Log in to your Proxy402 dashboard
2. Navigate to the Settings page
3. Look for the "Proxy402 Secret" field - this contains your unique secret

![Settings Page](/img/settings.png)

> If you believe your secret has been compromised, you can regenerate it from the Settings page.

## Implementing Verification in Your Server

If you own the server that hosts your original content, you should add verification code to check for this header. Here are some examples:

### Node.js (Express)

```javascript
app.get('/your-endpoint', (req, res) => {
  // Get the secret from the request header
  const secret = req.headers['proxy402-secret'];
  
  // Check if the secret matches your secret from the settings page
  if (secret !== 'YOUR_SECRET_FROM_SETTINGS') {
    // Reject unauthorized requests
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  
  // Process the authorized request
  res.json({ data: 'Your protected content' });
});
```

### Python (Flask)

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/your-endpoint')
def protected_content():
    # Get the secret from the request header
    secret = request.headers.get('Proxy402-Secret')
    
    # Check if the secret matches your secret from the settings page
    if secret != 'YOUR_SECRET_FROM_SETTINGS':
        # Reject unauthorized requests
        return jsonify({'error': 'Unauthorized access'}), 403
    
    # Process the authorized request
    return jsonify({'data': 'Your protected content'})
```

### Go

```go
func handler(w http.ResponseWriter, r *http.Request) {
    // Get the secret from the request header
    secret := r.Header.Get("Proxy402-Secret")
    
    // Check if the secret matches your secret from the settings page
    if secret != "YOUR_SECRET_FROM_SETTINGS" {
        // Reject unauthorized requests
        http.Error(w, "Unauthorized access", http.StatusForbidden)
        return
    }
    
    // Process the authorized request
    w.Header().Set("Content-Type", "application/json")
    w.Write([]byte(`{"data": "Your protected content"}`))
}
```

## Why This Matters

Without this verification:
- Someone could discover your original URL and bypass the payment system
- You wouldn't be able to distinguish between paid and unpaid requests
- Your monetization strategy could be compromised

By implementing this simple verification check, you ensure that only properly paid requests from Proxy402 can access your content.

## Testing the Verification

You can test this by:

1. Setting up a simple server with verification code
2. Monetizing its URL with Proxy402
3. Trying to access the original URL directly (should be rejected)
4. Accessing through Proxy402 with payment (should succeed)

This provides a complete security system for your monetized content. 