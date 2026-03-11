import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mentorist Docs',
  tagline: 'Documentation for all Mentorist products',
  favicon: 'img/favicon.ico',

  url: 'https://docs.mentorist.gr',
  baseUrl: '/',

  organizationName: 'ntzorvas',
  projectName: 'mentorist-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/ntzorvas/mentorist-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Mentorist Docs',
      logo: {
        alt: 'Mentorist Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'pm-os/intro',
          position: 'left',
          label: 'PM-OS',
        },
        {
          type: 'doc',
          docId: 'aros/intro',
          position: 'left',
          label: 'AROS',
        },
        {
          type: 'doc',
          docId: 'socialos/intro',
          position: 'left',
          label: 'SocialOS',
        },
        {
          href: 'https://github.com/ntzorvas/mentorist-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {label: 'PM-OS', to: '/docs/pm-os/intro'},
            {label: 'AROS', to: '/docs/aros/intro'},
            {label: 'SocialOS', to: '/docs/socialos/intro'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ntzorvas/mentorist-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mentorist. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
