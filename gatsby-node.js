const path = require('path');
const redirects = require('./redirects.json');

exports.createPages = async ({actions}) => {
  const {createRedirect} = actions;

  redirects.forEach(({fromPath, toPath}) =>
    createRedirect({
      fromPath,
      toPath,
    }),
  );
};

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@theme': path.resolve(__dirname, 'src/theming'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        // '@config': path.resolve(__dirname, 'src/config'),
      },
    },
  });
};

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;
  const postTemplate = path.resolve(`src/components/templates/Post.tsx`);

  const result = await graphql(`
    {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/blogs/"}}
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  const posts = result.data.allMdx.edges;

  posts.forEach(({node}) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });
};
