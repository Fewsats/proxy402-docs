---
sidebar_position: 6
sidebar_label: "About X402 Protocol"
---

# What is the X402 Protocol?

The [X402 protocol](https://x402.org) is an open standard for internet-native payments using the HTTP 402 status code.

HTTP 402 ("Payment Required") was included in the original HTTP specification but remained unused until now. X402 activates this status code to standardize web payments across the internet.

## How X402 Works

![X402 Protocol Flow](/img/x402-protocol-flow.png)

1. Client requests a resource
2. Server responds with HTTP 402 and payment details
3. Client creates a payment on the blockchain
4. Client retries with payment proof
5. Server verifies and fulfills the request

## Key Benefits

- **Zero Protocol Fees**: Only blockchain transaction costs
- **Instant Settlement**: Payments settle in seconds
- **No Registration**: No user accounts needed
- **Minimal Integration**: Simple implementation
- **Chain Agnostic**: Works with various blockchains

For more details, visit [x402.org](https://x402.org) or the [GitHub repository](https://github.com/coinbase/x402). 