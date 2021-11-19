module.exports = {
  siteMetadata: {
    title: `Crypto Tracking App`,
    description: `Orbit's financial tools provide reliable cryptocurrency data and economic strategies to help it's consumers with a social interactive market to support blockchain development.`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orbit`,
        short_name: `Orbit`,
        start_url: `/`,
        background_color: '#1F0359',
        theme_color: '#1F0359',
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
