/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FPA Games`,
    description: `FPA Games is an organization dedicated to aiding in the publishing and management of open-source video games.`,
    author: `@fairfieldprogramming`,
    siteUrl: `https://vault.fairfieldprogramming.org`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: false,
        sitemap: 'https://vault.fairfieldprogramming.org/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FPA Vault`,
        short_name: `vault`,
        start_url: `/`,
        background_color: `#0F006C`,
        theme_color: `#0F006C`,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "hidden",
                "heading[depth=2]": "p-2 text-3xl font-bold mt-8",
                "paragraph": "p-2 text-xl",
                "link": "underline text-sky-500",
                "break": "border my-16"
              }
            }
          }
        ],
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "developers",
        path: `${__dirname}/developers/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "games",
        path: `${__dirname}/games/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/pages/`,
      },
    }
  ],
}
