---
sidebar_position: 1
---

# Introduction to Proxy402

Proxy402 is a service that allows you to monetize any content on the web. Using the X402 protocol, Proxy402 enables machine-native payments for any URL you provide, effectively placing a paywall in front of your content that can be paid using USDC on Base.

## Create Your First Test URL

Let's create a monetized URL using the Bitcoin whitepaper as an example:

1. Log in to [Proxy402](https://proxy402.com) with your Google account
2. Add this URL: `https://raw.githubusercontent.com/ibz/bitcoin-whitepaper-markdown/refs/heads/master/bitcoin-whitepaper.md`
3. Set the price to 0.01 USDC
4. Toggle test mode ON (to use Base Sepolia testnet)
5. Select GET as the HTTP method
6. Click "Add URL"

After submitting, you'll receive a shortened URL similar to `https://proxy402.com/cizbtYMSzJ`. This is your monetized link. Whenever someone accesses this URL, they'll need to pay 0.01 USDC on the Base Sepolia testnet. After payment, Proxy402 makes a GET request to the original Bitcoin whitepaper URL and returns the content to the user.

## Understanding the X402 Protocol Response

Open a monetized URL in your browser to see the X402 protocol response. [Click here to view an example](https://proxy402.com/cizbtYMSzJ) of the Bitcoin whitepaper with a 0.01 USDC price tag.

The response will look like this:

![X402 Protocol Response in Browser](/img/x402-response-browser.png)

This response contains all the payment details that an X402-compatible client needs to pay for access, including:
- The payment amount (0.01 USDC)
- The payment destination (a Base address)
- Other technical details for the X402 protocol

Now that you have a test URL, let's see how you can pay for it in the next section.

## What's Next?

Now that you understand how to create a monetized URL and what the X402 protocol response looks like, the next step is to learn how to actually pay for and access the content using an X402-compatible client.

- [Paying for Monetized Content](/docs/getting-started/paying-for-content)