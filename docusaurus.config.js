// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hash Studios Development Documentation',
  tagline: 'For Everything Hash Studios',
  favicon: '/img/hashstudiosllclogo-5000x5000-NoBackground.png',

  // Set the production url of your site here
  url: 'https://Hash-Studios-LLC.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DevelopmentDocumentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hash-Studios-LLC', // Usually your GitHub org/user name.
  projectName: 'DevelopmentDocumentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Hash-Studios-LLC/DevelopmentDocumentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Hash-Studios-LLC/DevelopmentDocumentation',
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
      // Replace with your project's social card
      image: '/img/ImageThumbnail.png',
      colorMode: {
        defaultMode: 'dark', // Set the default mode to dark
      },
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: '/img/HashStudiosLLC-Banner.png',
        },
        items: [
          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {
            href: 'https://hashstudiosllc.com',
            label: 'Website',
            position: 'left',
          },
          {
            href: 'https://www.patreon.com/HashStudiosLLC',
            label: 'Patreon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/78EnuECcY4',
            label: 'Discord',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Page',
                href: 'https://hashstudiosllc.com/community',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@hashstudiosllc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HashStudiosLLC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Creator Partner Program',
                href: 'https://hashstudiosllc.com/community',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hashstudiosllc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hash Studios LLC | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {name: 'description', content: 'For all your development needs with Hash Studios'},
        {property: 'og:title', content: 'Docs'},
        {property: 'og:description', content: 'For all your development needs with Hash Studios'},
        {property: 'og:image', content: '/img/ImageThumbnail.png'},
        {property: 'og:url', content: 'https://Hash-Studios-LLC.github.io/DevelopmentDocumentation'},
      ],
    }),
};

export default config;
