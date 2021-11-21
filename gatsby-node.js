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
