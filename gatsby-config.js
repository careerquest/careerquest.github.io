/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Career Quest",
    description: "Discover the insights and strategies you need for a successful career in recruitment and professional advancement. Career Quests is your go-to resource for a wide range of articles covering various topics related to the world of recruitment and career development. From resume optimization and interview techniques to networking tips and industry trends, our blog provides valuable guidance for navigating the ever-evolving job market. Join us on this journey as we delve into the intricacies of recruitment, equipping you with the knowledge and skills needed to embark on your own career quests.",
  },
  plugins: [
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
