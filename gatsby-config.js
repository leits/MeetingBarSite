const config = require("./src/config")
const theme = require("./src/styles/Theme")

module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
    siteName: config.siteMetadata.siteName,
    siteUrl: config.siteMetadata.siteUrl,
    description: config.siteMetadata.description,
    author: config.siteMetadata.author,
    language: config.siteMetadata.language,
    icon: config.siteMetadata.icon,
    image: config.siteMetadata.image,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-preload-link-crossorigin`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-174005306-1`,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteShortTitle,
        start_url: `/`,
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: `minimal-ui`,
        icon: config.siteMetadata.icon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-174005306-1`,
        head: false,
        anonymize: true,
      },
    },
  ],
}
