/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Valentin Lica",
    description: "Portfolio Website",
    siteUrl: "https://wwww.valentinlica.ml/",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === `content`) {
            return `Content`;
          }
          return name;
        },
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
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@ui": "src/components/UI/index.tsx",
          "@styles": "src/styles",
          "@utils": "src/utils",
          "@interface": "src/interface",
          "@config": "src/config",
          "@data": "src/data",
          "@icon": "src/components/CustomIcons.tsx",
          "@content": "src/content",
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: ["G-67NH5YELGY", "GTM-MVZL5D4"],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
  ],
};
