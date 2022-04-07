module.exports = {
  siteMetadata: {
    title: "Valentin Lica",
    description: "Portfolio Website",
    siteUrl: "https://wwww.valentinlica.ml/",
    image: "/logo.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-transformer-yaml",
    //   options: {
    //     typeName: ({ node }) => {
    //       const name = node.sourceInstanceName;
    //       if (name === `content`) {
    //         return `Content`;
    //       }
    //       return name;
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `./src/posts`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `./src/content`,
    //     name: "content",
    //   },
    // },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@ui": "src/components/UI/index.tsx",
          "@styles": "src/styles",
          "@icon": "src/components/CustomIcons.tsx",
          "@data": "src/data",
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: ["G-61KC9KSVQX"],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
  ],
};
