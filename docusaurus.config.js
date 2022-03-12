// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeDesign Docs",
  tagline: "Learn & Build No-Code with CodeDesign.app",
  url: "https://docs.codedesign.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "storylens", // Usually your GitHub org/user name.
  projectName: "codedesign.docs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "YOUR_APP_ID",

        // Public API key: it is safe to commit it
        apiKey: "YOUR_SEARCH_API_KEY",

        indexName: "YOUR_INDEX_NAME",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },

      navbar: {
        title: "CodeDesign Docs",
        logo: {
          alt: "My Site Logo",
          src: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/tfxcnxsaklqo5bt1ozzu",
        },
        items: [
          {
            href: "https://codedesign.app/support",
            label: "Need Support",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",

        copyright: `Copyright © ${new Date().getFullYear()} CodeDesign Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
