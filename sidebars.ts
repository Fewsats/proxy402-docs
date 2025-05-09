import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Sidebar for the Getting Started section
  gettingStartedSidebar: [
    'intro', // Assuming 'intro.md' is your main introduction page
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with Proxy402',
        description: 'Learn how to use Proxy402 to monetize your APIs and content',
        slug: '/getting-started'
      },
      items: [
        'getting-started/create-your-first-url',
        'getting-started/paying-for-content',
        'getting-started/custom-payment-address',
        'getting-started/verifying-requests',
        'getting-started/what-is-x402'
      ],
    },
  ],

  // Sidebar for the API Reference section
  apiReferenceSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'doc',
        id: 'api/index', // Links to the overview page of API docs
      },
      items: [
        'api/authentication',
        'api/routes',
        'api/purchases',
      ],
    },
  ],
};

export default sidebars;
