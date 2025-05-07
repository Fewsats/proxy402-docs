---
sidebar_position: 5
---

# Verifying Requests

If you own or control the target server that receives requests through Proxy402, you might want to verify that these requests are legitimate paid requests rather than direct access attempts that bypass the payment system.

Proxy402 makes this easy with the `Proxy402-Secret` header, which is automatically added to all proxied requests after successful payment.

## How Request Verification Works

When someone pays through Proxy402 to access your content, the following happens:

1. User accesses your Proxy402 URL (e.g., `https://proxy402.com/AbCdEfG`)
2. User makes the required payment
3. Proxy402 forwards the request to your original target URL
4. Proxy402 adds a special `Proxy402-Secret` header to the request
5. Your server can verify this secret header to confirm it's a paid request

This allows you to ensure that all access to your content comes through the proper payment flow.

## Setting Up Request Verification

### Step 1: Find Your Secret

1. Go to your Proxy402 dashboard
2. Navigate to the Settings section
3. Look for your unique `Proxy402-Secret` value
4. Copy this secret value

<img src="/img/proxy_secret.png" alt="Proxy402 Secret" />

### Step 2: Add Verification to Your Server

Add code to your server that checks for the `Proxy402-Secret` header. Here are examples in various languages:

#### Node.js Example
```javascript
app.get('/api/data', (req, res) => {
  // Check if the secret header matches your secret
  if (req.headers['proxy402-secret'] !== 'YOUR_SECRET_FROM_USER_SETTINGS') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  // Process the request if the secret is valid
  res.json({ data: 'Your protected data' });
});
```

#### Python Example
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/data')
def protected_data():
    # Check if the secret header matches your secret
    if request.headers.get('Proxy402-Secret') != 'YOUR_SECRET_FROM_USER_SETTINGS':
        return jsonify({'error': 'Unauthorized'}), 403
    
    # Process the request if the secret is valid
    return jsonify({'data': 'Your protected data'})
```

#### Go Example
```go
func protectedHandler(w http.ResponseWriter, r *http.Request) {
    // Check if the secret header matches your secret
    if r.Header.Get("Proxy402-Secret") != "YOUR_SECRET_FROM_USER_SETTINGS" {
        http.Error(w, "Unauthorized", http.StatusForbidden)
        return
    }
    
    // Process the request if the secret is valid
    w.Header().Set("Content-Type", "application/json")
    w.Write([]byte(`{"data": "Your protected data"}`))
}
```

## When to Use Request Verification

Request verification is particularly useful when:

- You want to ensure all access to your content is paid 
- You're providing premium API access
- You need to prevent direct access to your resources
- You're using Proxy402 as part of a broader access control strategy

## Optional: Additional Security Measures

For even stronger security, consider implementing these additional measures:

1. **IP Restriction**: Configure your server to only accept requests from Proxy402's IP addresses
2. **HTTPS**: Ensure all communication uses HTTPS encryption
3. **Rate Limiting**: Implement rate limiting based on the client's IP or other identifiers

## Conclusion

With request verification in place, you can be confident that all requests to your content have been properly paid for through Proxy402. This completes the basic setup for monetizing your content with Proxy402.

## Next Steps

Now that you've completed the Getting Started guide, you might want to explore:

- [Server Setup](/docs/core/server-setup) if you want to run your own Proxy402 server
- [URL Management](/docs/core/url-management) for advanced URL configuration
- [Payment Flow](/docs/core/payment-flow) to understand the technical details of the payment process
- [API Reference](/docs/api/endpoints) if you want to integrate Proxy402 with your applications 