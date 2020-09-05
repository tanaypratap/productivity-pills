module.exports = {
  title: 'the productivity book',
  tagline: 'just enough productivity funda to get you started',
  url: 'https://theproductivitybook.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tanaypratap',
  projectName: 'the-productivity-book',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-49394184-6',
      anonymizeIP: true,
    },
    navbar: {
      title: 'theproductivitybook',
      logo: {
        alt: 'theproductivitybook Logo',
        src: 'img/logo.svg',
      },
      items: [{
        to: 'book/',
        activeBasePath: 'book',
        label: 'Book',
        position: 'left',
      }, ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} The Productivity Book, </br>
      site built by Tanay Pratap with <a href="https://docusaurus.io/"> docusaurus </a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "chapters",
          routeBasePath: "book",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tanaypratap/the-productivity-book/tree/master",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [{
            tagName: 'link',
            rel: 'icon',
            href: '/img/productivity.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(79,73,193)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/productivity.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(79,73,193)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/productivity.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};