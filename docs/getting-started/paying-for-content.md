---
sidebar_position: 2
sidebar_label: "Pay for Content"
---

# Paying for Monetized Content

In this section, we'll see how to pay for the test URL we created earlier. We'll use the Proxy402 client from the GitHub repository to make payments on the Base Sepolia testnet.

## Setting Up the Client

Let's start by cloning the Proxy402 repository and navigating to the client folder:

```bash
# Clone the repository
git clone https://github.com/Fewsats/proxy402.git

# Navigate to the client directory
cd proxy402/client
```

Now, let's create a configuration file:

```bash
# Copy the example environment file
cp .env.example .env
```

## Creating a Wallet

You'll need a private key for a Base address to make payments. You can use an existing wallet or create a new one. If you don't have one, you can create it using Foundry:

1. Install Foundry by running:
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   ```

2. Close and reopen your terminal to make sure it's added to your PATH

3. Install the latest version of the binaries:
   ```bash
   foundryup
   ```

4. Create a new wallet:
   ```bash
   cast wallet new
   ```

   This will output something like:
   ```
   Successfully created new keypair.
   Address:     0x5a07A201454B1bfD832390De797FcAC71a0B3256
   Private key: 0x383b73a7b5baf4d4deb9cd5e2689648ecc02646f77e82f4e51f3ff4334d4f083
   ```

5. Add the private key to your `.env` file:
   ```
   PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"
   ```
   Replace `YOUR_PRIVATE_KEY_HERE` with the private key from the previous step (including the `0x` prefix).

> If you'd prefer to use your own method to generate a wallet, that's fine too. Just make sure to add the private key to the `.env` file.
> 
> For more details on installing Foundry, see the [official documentation](https://book.getfoundry.sh/getting-started/installation).

## Running the Client

Now we can install the dependencies and run the client:

```bash
# Install dependencies
npm install

# Run the client to access our demo URL
npm run client https://proxy402.com/cizbtYMSzJ
```

At this point, you'll likely see an error: **"Insufficient funds"**. This is because your new wallet doesn't have any test USDC yet.

## Adding Test Funds

To add test USDC to your wallet:

1. Go to the [Circle USDC Faucet](https://faucet.circle.com/)

2. **IMPORTANT: Make sure to select "BASE USDC" as the network**

   ![Faucet Selection](/img/faucet.png)

3. Enter your wallet address (the one that starts with `0x` from the wallet creation step)

After receiving your test USDC, run the client again:

```bash
npm run client https://proxy402.com/cizbtYMSzJ
```

This time, the payment should succeed, and you'll see the Bitcoin whitepaper content displayed in your terminal.

## Checking Your Own URLs

If you created your own monetized URL in the previous section, you can use the client to pay for it too:

```bash
npm run client https://proxy402.com/YOUR_SHORT_CODE
```

After making a payment, go back to your Proxy402 dashboard and check your URL's statistics. You'll see that the "Attempts" and "Payments" counters have increased by one and your earnings going up!

