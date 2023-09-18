import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div class="mx-auto max-w-2xl px-4 py-16">
        
        <h1 class="text-3xl font-bold text-center text-blue-600">About Career Quests</h1>
        <p class="my-6 text-gray-600">
          
          Career Quests is a career discovery blog dedicated to helping job
          seekers and professionals at all stages of their careers. Whether
          you're a student deciding on a major, new graduate looking for your
          first job, or experienced professional considering a career change, we
          aim to be your guide in navigating your career journey.
        </p>
        <h2 class="text-2xl font-bold my-6 text-blue-600">Our Mission</h2>
        <p class="text-gray-600">
          
          Our mission is to empower individuals to take control of their careers
          through insightful content, practical advice and success stories. We
          strive to break down the barriers of career exploration by providing
          easily digestible career guides, tips and resources to help you make
          more informed choices every step of the way.
        </p>

        <h2 class="text-2xl font-bold my-6 text-blue-600">What You'll Find Here</h2>
        <p class="text-gray-600">
          
          On Career Quests, you'll discover in-depth career profiles on
          high-growth industries, informative guides on topics like resume
          writing and interview preparation, real-world advice from
          professionals, and inspirational stories of career transitions. My
          goal is to fuel your career curiosity and empower you to take action
          towards fulfilling work.
        </p>
        <p class="text-gray-600">
          I hope Career Quests becomes your go-to resource for all things
          career-related. Let me know how I can better assist you on your quest!
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => <SEO title="About Us" />;

export default AboutPage;
