import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Proxy402 Docs',
  tagline: 'Monetize any link in seconds',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.proxy402.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fewsats', // Usually your GitHub org/user name.
  projectName: 'proxy402-docs', // Usually your repo name.

  // GitHub Pages deployment configurations
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/proxy402-social-card.png',
    navbar: {
      title: 'Proxy402',
      logo: {
        alt: 'Proxy402 Logo',
        src: 'img/logo.svg',
        href: 'https://proxy402.com',
      },
      items: [
        {
          to: 'getting-started/create-your-first-url',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'api',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/Fewsats/proxy402',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Create Your First URL',
              to: 'getting-started/create-your-first-url',
            },
            {
              label: 'API Reference',
              to: 'api',
            },
            {
              label: 'About X402',
              to: '/getting-started/what-is-x402',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'http://discord.gg/2tPYBgWzQm',
            },
            {
              label: 'X',
              href: 'https://x.com/Fewsats',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Fewsats/proxy402',
            },
            {
              label: 'X402 Protocol',
              href: 'https://x402.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a style="color: #fff;" href="https://proxy402.com" target="_blank" rel="noopener noreferrer">Proxy402</a> by <a style="color: #fff;"  href="https://fewsats.com" target="_blank" rel="noopener noreferrer">Fewsats</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
