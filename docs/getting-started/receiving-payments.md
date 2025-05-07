---
sidebar_position: 4
---

# Receiving Payments

Once you've set up monetized URLs with Proxy402, you have two ways to receive your earnings:

1. **Platform Payouts**: Proxy402 collects payments on your behalf and handles payouts
2. **Direct Wallet**: Payments go directly to your Base wallet address

This guide explains both options and how to set them up.

## Platform Payouts vs. Direct Wallet

### Platform Payouts (Default)

By default, Proxy402 collects payments on your behalf. This means:

- Payments for your monetized URLs go to Proxy402's wallet
- Proxy402 tracks your earnings in the dashboard
- Periodic payouts are made to your designated wallet address
- You don't need to set up anything initially

**Benefits**:
- No technical setup required
- Consolidated earnings tracking
- Reduced transaction fees (batch processing)
- No need to manage multiple wallets

### Direct Wallet

Alternatively, you can configure Proxy402 to send payments directly to your Base wallet:

- Payments for your monetized URLs go directly to your wallet address
- Transactions settle immediately to your wallet
- You have complete control over your funds
- You need to provide a valid Base wallet address

**Benefits**:
- Immediate settlement to your wallet
- Full control of your funds
- No waiting for platform payouts
- Transparency (all transactions visible on-chain)

## Setting Up Direct Wallet Payments

To configure direct wallet payments:

1. Go to your Proxy402 dashboard
2. Open the **Settings** section
3. Find the **Payment Address** field
4. Enter your Base wallet address
5. Save your changes

<img src="/img/payment_settings.png" alt="Payment Address Settings" />

:::caution
Make sure to enter a valid Base wallet address. Payments sent to incorrect addresses cannot be recovered.
:::

## Viewing Your Earnings

Whether you use platform payouts or direct wallet payments, you can view your earnings in the Proxy402 dashboard:

- **Live Earnings**: Real USDC earned from mainnet transactions
- **Test Earnings**: Test USDC from Base Sepolia testnet (no real value)
- **Daily Earnings Chart**: Visual representation of earnings over time
- **Purchase History**: Record of individual payments

<img src="/img/earnings_dashboard.png" alt="Earnings Dashboard" />

## Test Mode vs. Live Mode

Remember that monetized URLs in Test Mode use the Base Sepolia testnet and generate test earnings (not real money). Only Live Mode URLs generate real USDC earnings.

## Obtaining Base USDC

If you're new to Base and need to convert your USDC earnings:

1. **Create a Base-compatible wallet**: MetaMask, Coinbase Wallet, or similar
2. **Bridge to Ethereum mainnet**: Use Base Bridge (bridge.base.org) to move funds
3. **Exchange for other currencies**: Use a compatible exchange like Coinbase

## Next Steps

Now that you understand how to receive payments, let's look at how to verify requests to ensure they're coming through Proxy402. 