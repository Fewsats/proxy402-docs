---
sidebar_position: 3
sidebar_label: "Direct Payments"
---

# Setting Up Direct Payments

By default, payments made to your monetized URLs go to a Fewsats-controlled address, and you can request payouts from there. However, you can choose to receive payments directly to your own Base wallet address instead.

## Why Use a Custom Payment Address?

Using your own payment address gives you:
- Instant receipt of funds (no waiting for payouts)
- Complete control over your earnings
- Direct verification of payments on the blockchain

## Adding Your Payment Address

To set up direct payments to your wallet:

1. Log in to your Proxy402 dashboard
2. Navigate to the Settings page
3. Find the "Payment Address" field
4. Enter your Base wallet address (the same one we created earlier)
5. Click "Save Changes"

![Settings Page](/img/settings.png)

> **⚠️ IMPORTANT**: When you set a custom payment address, all payments will go directly to this address. If you lose access to this wallet or its private key, **these funds will be permanently lost**. Proxy402 and Fewsats cannot recover lost funds. Always securely back up your wallet information.

## Testing Your Custom Payment Address

Let's verify that payments are going directly to your wallet:

1. Make sure you've set your custom payment address in Settings
2. Use the client to pay for your monetized URL (just like in the previous section):
   ```bash
   npm run client https://proxy402.com/YOUR_SHORT_CODE
   ```
3. The payment will now go directly from your client wallet to your custom payment address (which could be the same address if you used the same wallet)

## Verifying the Payment on the Blockchain

You can verify the transaction on BaseScan:

1. Go to [Base Sepolia Explorer](https://sepolia.basescan.org/)
2. Enter your wallet address (NOT your private key!) in the search bar
3. Look for the most recent "Token Transfer" transaction
4. You should see a USDC transfer where both the "From" and "To" addresses match your wallet (if you used the same wallet for payment and receiving)

![BaseScan Transaction](/img/basescan.png)

This confirms that your payment setup is working correctly, with payments going directly to your specified address.

## Reverting to Platform Payouts

If you want to go back to using platform-managed payouts:

1. Go to Settings
2. Clear the Payment Address field
3. Save Changes

Payments will then go to the Proxy402 platform address, and you can request payouts through the dashboard. 