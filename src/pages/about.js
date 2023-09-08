// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo";


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        
      </p>
    </Layout>
  );
};

export const Head = () => (<Seo title="About Us" />);

// Step 3: Export your component
export default AboutPage;
