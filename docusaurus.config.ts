import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'etsuko.fm/docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://etsuko-fm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/etsuko-fm-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'etsuko-fm', // Usually your GitHub org/user name.
  projectName: 'etsuko-fm-docs', // Usually your repo name.

  onBrokenLinks: 'throw',



  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

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
          sidebarCollapsed: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'etsuko.fm/docs',
      logo: {
        alt: 'etsuko.fm logo',
        src: 'img/etsuko-white-round.png',
        href: '/docs/eterna'
      },
      items: [
        {
          type: 'dropdown',
          label: 'products',
          position: 'right',
          items: [
            {
              label: 'Eterna',
              to: '/docs/eterna/',
            },
            // {
            //   label: 'Silk',
            //   to: '/docs/silk/',
            // },
          ],
        },

        // {
        //   href: 'https://github.com/etsuko-fm',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    // footer: {
    //   links: [
    //   ],
    //   // copyright: `Copyright © ${new Date().getFullYear()} etsuko.fm`,
    // },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
