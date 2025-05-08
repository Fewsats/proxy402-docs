# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Using Just

This project uses [Just](https://github.com/casey/just) as a command runner. Just is a handy way to save and run project-specific commands.

### Installation

First, install project dependencies:

```bash
$ just install
```

This runs `npm install` behind the scenes.

### Local Development

```bash
$ just start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

```bash
$ just deploy
```

This command builds the website and deploys it to GitHub Pages.

## Manual Commands

If you prefer not to use Just, you can run the npm commands directly:

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm start
```

### Build

```bash
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Manual Deployment

```bash
$ npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
