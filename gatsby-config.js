module.exports = {
  siteMetadata: {
    title: `Cryptocurrency Financial Tools`,
    description: `Saren's financial tools provide reliable cryptocurrency data and economic strategies to help it's consumers with a social interactive market to support blockchain development.`,
    author: `@jaykch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saren-io`,
        short_name: `Saren.io`,
        start_url: `/`,
        background_color: '#fafafa',
        theme_color: '#0a0a0a',
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
