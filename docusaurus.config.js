module.exports = {
  title: 'OpenCities Developer Documentation',
  tagline: '',
  url: 'http://opencities.github.io/',
  baseUrl: '/oc-dev-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenCities', // Usually your GitHub org/user name.
  projectName: 'oc-dev-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'OpenCities',
      logo: {
        alt: 'OpenCities Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'http://opencities.github.io/oc-dev-docs',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/opencitiesinc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'OpenCities',
              to: 'https://www.opencities.com/Home',
            },
            {
              label: 'GitHub',
              href: 'http://opencities.github.io/oc-dev-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenCities. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'oc_tags',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/OpenCities/oc-dev-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/OpenCities/oc-dev-docs/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
