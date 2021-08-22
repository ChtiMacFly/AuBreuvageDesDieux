const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Au breuvage des Dieux',
    description: `Vente de chocolats belges`,
    author: `csudre`,
    keywords: ['chocolat', 'beauraing'],
    cover_image: 'fond-breuvage-des-dieux.png',
    twitter: '@breuvagedesdieux',
    facebook: 'breuvagedesdieux',
    lang: 'fr',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'aubreuvagedesdieux',
        short_name: 'aubreuvagedesdieux',
        start_url: '/',
        icon: 'src/images/Logo-breuvage-des-dieux.png', // This path is relative to the root of the site.
      },
    },
    // gatsby-image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    //'gatsby-plugin-less',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ]
}
