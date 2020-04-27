module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
