const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'The new incognito.org document site',
  tagline: 'Incognito',
  url: 'https://docs.incognito.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/prv.ico',
  organizationName: 'incognitochain', // Usually your GitHub org/user name.
  projectName: 'incognito-chain', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/incognitochain/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'docs.incognito',
        logo: {
          alt: 'docs.incognito Logo',
          src: 'img/prv.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/incognitochain/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'Community',
            items: [
              {
                label: 'Community Forum',
                href: 'https://we.incognito.org',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/incognitochain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/incognitochain',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/IncognitoChain/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/incognitochain',
              },
              {
                label: 'Apple App Store',
                href: 'https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1',
              },
              {
                label: 'Google Play Store',
                href: 'https://play.google.com/store/apps/details?id=com.incognito.wallet',
              },
              {
                label: 'Android .APK',
                href: 'https://github.com/incognitochain/incognito-wallet/releases',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} incognito.org - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),

  scripts: [{src: 'https://plausible.incognito.org/js/plausible.js', defer: true, 'data-domain': 'docs.incognito.org'}],
});
