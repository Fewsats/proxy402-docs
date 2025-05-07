# Proxy402 Documentation justfile
# Usage: just <command>

# Default command when just is called without arguments
default:
    @just --list

# Install dependencies
install:
    npm install

# Run the development server
start:
    npm start

# Deploy to GitHub Pages
deploy:
    npm run deploy 