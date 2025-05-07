---
sidebar_position: 2
---

# What is the X402 Protocol?

The X402 protocol is a revolutionary open standard for internet-native payments that leverages the HTTP 402 status code to enable frictionless transactions across the web.

## HTTP 402: Payment Required

The HTTP 402 status code was included in the original HTTP specification as a status for "Payment Required" but remained largely unused for decades. The X402 protocol activates this dormant feature to create a standardized way of handling digital payments on the web.

## How X402 Works

The X402 protocol works through a simple flow:

1. **Request**: A client requests a resource from a server
2. **Payment Required**: If payment is needed, the server responds with HTTP 402 and payment requirements
3. **Payment**: The client makes a payment using the specified blockchain (Base in Proxy402's case)
4. **Verification**: The client retries the request with proof of payment
5. **Resource Delivery**: The server verifies the payment and delivers the resource

This happens seamlessly and quickly, with minimal latency.

## Key Benefits of X402

- **Zero Fees**: X402 as a protocol has no fees (you pay only blockchain transaction costs)
- **Instant Settlement**: Payments settle at blockchain speed (2 seconds on Base)
- **Frictionless**: No user accounts, registration, or OAuth flows required
- **Web Native**: Works with any HTTP stack using standard headers and status codes
- **Security & Trust**: Open standard that anyone can implement or extend
- **Blockchain Agnostic**: Not tied to any specific blockchain (Proxy402 uses Base)

## X402 in Proxy402

Proxy402 implements the X402 protocol to enable monetization for your APIs and content:

- Each monetized URL in Proxy402 is protected by the X402 protocol
- When users access your content, they're prompted to pay with USDC on the Base blockchain
- Once payment is verified, Proxy402 proxies the request to your original content
- All transactions are secured by blockchain technology

## Technical Implementation

In Proxy402, the X402 protocol is implemented with a few key components:

- **Payment Requirements**: Defines the payment terms (amount, asset, network)
- **Payment Verification**: Checks if a valid payment has been made
- **Settlement**: Finalizes the transaction on the blockchain

When setting up a monetized URL, you don't need to understand these details - Proxy402 handles all the X402 implementation for you.

## Next Steps

Now that you understand what X402 is, let's move on to creating your first monetized URL with Proxy402. 