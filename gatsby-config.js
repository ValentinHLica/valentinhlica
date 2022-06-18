module.exports = {
  siteMetadata: {
    title: "Valentin Lica",
    description: "Portfolio Website",
    siteUrl: "https://valentinhlica.pages.dev/",
    image: "/logo.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.md`, `.mdx`],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 720,
    //         },
    //       },
    //     ],
    //   },
    // },
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
        name: `projects`,
        path: `./src/projects`,
      },
    },
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
  ],
};
