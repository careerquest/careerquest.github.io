/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Career Quest",
    description:
      "Discover the insights and strategies you need for a successful career in recruitment and professional advancement. Career Quests is your go-to resource for a wide range of articles covering various topics related to the world of recruitment and career development. From resume optimization and interview techniques to networking tips and industry trends, our blog provides valuable guidance for navigating the ever-evolving job market. Join us on this journey as we delve into the intricacies of recruitment, equipping you with the knowledge and skills needed to embark on your own career quests.",
      siteUrl: `https://careerquest.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CreerQuest",
        short_name: "CreerQuest",
        start_url: "/",
        background_color: "#0000",
        theme_color: "#1f2937",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-W6WPYD4XDH", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",

    "gatsby-transformer-sharp",
  ],
};
