// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

const GTAG = "G-LMLF0JGDRS"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Solana Gateway",
  tagline: "Add solana gateway to your project",
  url: "https://www.solanagateway.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "solanagateway", // Usually your GitHub org/user name.
  projectName: "Solana Gateway", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          anonymizeIP: false,
          trackingID: GTAG
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Solana Gateway",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation"
          },
          {
            href: "https://discord.gg/rRxDV3y9Ws",
            label: "Discord",
            position: "right"
          },
          {
            href: "https://www.npmjs.com/package/solanagateway",
            label: "npm",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "npm",
                href: "https://www.npmjs.com/package/solanagateway"
              },
              {
                label: "Discord",
                href: "https://discord.gg/rRxDV3y9Ws"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solana Gateway.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
