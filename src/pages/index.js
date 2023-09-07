// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogList from "../components/blogList";

// import { StaticImage } from "gatsby-plugin-image";
// import { disableSelect } from "../components/layout.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <BlogList/>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
