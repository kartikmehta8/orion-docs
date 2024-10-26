// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Orion Framework',
  tagline: 'Express on Steroids: The Ultimate Plug-and-Play Backend Architecture',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://orion.mrmehta.in', // Update with your custom domain
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/', // Update this to the root path since you're using a custom domain

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kartikmehta8', // Usually your GitHub org/user name
  projectName: 'orion-docs', // Your repo name hosting the Docusaurus site

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kartikmehta8/orion-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/kartikmehta8/orion-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Orion',
        logo: {
          alt: 'Orion Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/kartikmehta8/orion-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kartikmehta8/orion-docs',
              },
            ],
          },
          {
            title: 'Meet the Builder',
            items: [
              {
                label: 'Website',
                href: 'https://mrmehta.in',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kartikmehta17',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/kartik_mehta8',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Orion Framework. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.dracula,
      },
    }),
    stylesheets: [
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    ],
};

export default config;
