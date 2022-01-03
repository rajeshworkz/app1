module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "app1",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://192.168.64.6/`,
      },
    },
  ],
};
