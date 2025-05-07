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
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/introduction',
      },
      items: [
        'getting-started/introduction',
        'getting-started/paying-for-content',
        'getting-started/custom-payment-address',
        'getting-started/verifying-requests',
        'getting-started/what-is-x402'
      ],
    },
  ],
};

export default sidebars;
