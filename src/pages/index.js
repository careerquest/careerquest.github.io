import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import BlogList from "../components/blogList";

const IndexPage = () => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  );
};

export const Head = () => <SEO />;

export default IndexPage;
