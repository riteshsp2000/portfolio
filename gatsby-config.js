module.exports = {
  siteMetadata: {
    title: 'Ritesh Patil',
    description:
      "I'm a student developer currently studying at National Institute of Technology Rourkela. I specialize in building modern and performant web and mobile applications.",
    siteUrl: 'https://riteshpatil.dev',
    image: '/logo.png',
    twitterUsername: '@riteshsp2000',
    author: 'Ritesh Patil',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ritesh Patil: Portfolio',
        short_name: 'Ritesh patil',
        start_url: '/',
        background_color: '#0E151C',
        theme_color: '#FF0A78',
        display: 'minimal-ui',
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-images`,
        path: `${__dirname}/content/projects/images`,
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
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // Cache fonts forever
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=31536000',
            'Cache-Control: immutable',
          ],
          // Cache images for a week
          '/static/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=31536000',
            'Cache-Control: immutable',
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-193854636-1',
    //   },
    // },
  ],
};
