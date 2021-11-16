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

// exports.createPages = async function ({actions, graphql}) {
//   const {data} = await graphql`
//     query {
//       allMdx(sort: {fields: frontmatter__date, order: DESC}) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `;

//   // Created paginated pages for posts
//   const postPerPage = 3;
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
//   Array.from({length: numPages}).forEach((_, i) => {
//     actions.createPage;
//   });
// };
