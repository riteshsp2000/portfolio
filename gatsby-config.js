/* eslint-disable no-useless-escape */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Ritesh Patil',
    description:
      'Ritesh Patil is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://riteshpatil.com',
    // image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@riteshp2000',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ritesh Patil: Portfolio',
        short_name: 'Ritesh patil',
        start_url: '/',
        background_color: '#0E151C',
        theme_color: '#FF0A78',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,500,600,700`,
          `muli\:400,400i,500,500i,600,600i,700,700i`,
        ],
        display: 'swap',
      },
    },
  ],
};
