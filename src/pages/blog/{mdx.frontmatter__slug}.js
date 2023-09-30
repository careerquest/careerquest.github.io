import * as React from "react";
import Layout from "../../components/layout";
import {Seo} from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/* <p>{data.mdx.frontmatter.date}</p> */}
      <div className="py-8 px-4 mx-auto max-w-4xl screen-xl lg:py-16 lg:px-6">
        <span className="text-sm flex justify-end">Posted : {data.mdx.frontmatter.date}</span>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          className="z-[10] w-full rounded-lg mb-5"
        />
        <h1 className="text-blue-600 text-xl font-black">
          {data.mdx.frontmatter.title}
        </h1>
        {children}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
