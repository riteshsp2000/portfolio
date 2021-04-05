exports.createPages = async function ({actions, graphql}) {
  const {data} = await graphql`
    query {
      allMdx(sort: {fields: frontmatter__date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `;
};
