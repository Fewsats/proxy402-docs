---
sidebar_position: 3
---

# Monetizing Your First URL

In this guide, we'll walk through the process of monetizing your first URL with Proxy402. You'll learn how to create a proxy URL that requires payment before forwarding requests to your content.

## Prerequisites

Before you begin, make sure you have:
- Logged into Proxy402 with your Google account
- The target URL you want to monetize (e.g., an API endpoint, document, or web page)

## Step 1: Access the Dashboard

After logging in, you'll be taken to your dashboard, which shows:
- Current earnings (Live and Test)
- Analytics on purchases and earnings over time
- A form to add new monetized URLs
- A list of your existing monetized URLs

<img src="/img/dashboard.png" alt="Proxy402 Dashboard" />

## Step 2: Enter Your Target URL

In the URL monetization form:

1. Enter the full URL you want to monetize in the "Enter URL to monetize" field
   - This should be a publicly accessible URL (e.g., `https://api.example.com/data`)
   
2. Set the price in USDC
   - You can set prices as low as $0.001 USDC
   - Consider starting with a low price to test market demand

3. Select the HTTP method from the dropdown (GET, POST, PUT, DELETE)
   - Choose the method that clients will use to access your resource
   - Most content URLs use GET

4. Toggle "Test Mode" if you want to test without real payments
   - Test mode uses Base Sepolia testnet instead of mainnet
   - Perfect for testing before going live with real payments

5. Click "Add URL" to create your monetized endpoint

<img src="/img/add_url_form.png" alt="Add URL Form" />

## Step 3: Get Your Proxy URL

After adding the URL, it will appear in your list of monetized URLs with:
- The original target URL
- The generated proxy URL (e.g., `https://proxy402.com/AbCdEfG`)
- Method type
- Price
- Test/Live mode indicator
- Usage statistics (Attempts and Payments)

<img src="/img/url_list.png" alt="URL List" />

Your new proxy URL is what you'll share with users or integrate into your applications.

## Step 4: Test Your Monetized URL

Before sharing your URL, it's a good idea to test it:

1. Copy the proxy URL from your dashboard
2. Open a new browser tab or use an API testing tool like cURL or Postman
3. Make a request to the proxy URL

If you're in test mode:
- You'll see a payment required screen or response
- Using our client library or test client, you can make a test payment with testnet tokens

If you're in live mode:
- Real USDC payments will be required to access the content

## Understanding URL Stats

For each monetized URL, Proxy402 tracks:

- **Attempts**: The number of times users have tried to access your content
- **Payments**: The number of successful payments made to access your content

This data helps you understand the demand and conversion rate for your monetized content.

## Next Steps

Now that you've created your first monetized URL, you can:
- Share it with potential users
- Integrate it into your applications
- Set up direct payments to your wallet (covered in the next section)
- Add verification to your target server (optional, covered later)

In the next section, we'll explore how to receive payments from your monetized URLs. 