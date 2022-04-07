// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Blog Posts
  const blogPosts = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `);

  blogPosts.data.allMdx.nodes.forEach((item) => {
    createPage({
      path: `/blog/${item.slug}`,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { id: item.id },
    });
  });
};
