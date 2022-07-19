module.exports = {
  siteMetadata: {
    title: "Valentin Lica",
    description: "Portfolio Website",
    siteUrl: "https://valentinhlica.pages.dev/",
    image: "/logo.svg",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
