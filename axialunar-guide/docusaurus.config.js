const { baseUrlPattern } = require("../scripts/utils");
const { injectPlugin } = require("../scripts/injectPlugin");

const i18n = require("./i18n");

const isBuilding = process.env.BUILDING === "true";
const isPub = process.env.PUBLISHING === "true";

module.exports = {
  title: "Guide",
  titleDelimiter: "·",
  tagline: "One-stop-shop for AXIALunar information.",
  url: "https://lunar.wiki.AXIA.network",
  baseUrl: "/",
  projectName: isPub ? "axialunar-guide-hosting" : "",
  organizationName: "w3f",
  i18n,
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js",
    {
      src: "https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js",
      onload: "addBackToTop()",
      defer: true,
    },
    {
      src: "https://apisa.AXIA.org/latest.js",
      async: true,
      defer: true,
    },
    "../js/custom.js",
    "../js/clipboard.min.js",
    "../js/copycode.js",
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
    "https://fonts.googleapis.com/css?family=Muli&display=swap",
  ],
  favicon: "img/AXIALunar_Canary_white.png",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  onDuplicateRoutes: "log",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({ docPath }) => {
            const githubDocPath = `https://github.com/axia-tech/AXIA-wiki/edit/master/docs/`;
            return githubDocPath + docPath.replace("mirror-", "");
          },
          path: "../docs",
          sidebarPath: "./sidebars.js",
          remarkPlugins: [injectPlugin({ isAXIA: false })],
        },
        theme: {
          customCss: [
            require.resolve("./static/css/custom.css"),
            require.resolve("./static/css/copycode.css"),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      isCloseable: false,
      backgroundColor: "#178fe1",
      content: `<a
          id="support_us"
          href="/docs/contributing"
          title="Contribute to this wiki"
          data-ribbon="Contribute to this wiki"
        >
          Contribute to this wiki
        </a>`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
    navbar: {
      title: "Guide",
      logo: {
        src: "img/AXIALunar_logotype_white_large.png",
      },
      items: [
        {
          to: "docs/axialunar-getting-started",
          label: "Get Started",
          position: "right",
        },
        {
          to: "docs/axialunar-index",
          label: "Docs",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: "https://crowdin.com/project/AXIA-wiki",
              label: "Help us translate",
            },
          ],
        },
      ],
    },
    footer: {
      links: [],
      copyright: `© ${new Date().getFullYear()} AXIA Foundation`,
      logo: {
        src: "img/AXIALunar_Canary_white.png",
      },
    },
    algolia: {
      apiKey: "53c6a4ab0d77c0755375a971c9b7cc3d",
      indexName: "axialunar_guide",
      algoliaOptions: {
        facetFilters: ["language:LANGUAGE"],
      },
    },
  },
};
