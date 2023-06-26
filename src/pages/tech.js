import React from "react";
import { useSanity } from "sanity";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";


const TechPage = () => {
  const { data } = useSanity();
  const links = data.collections.techArticle.filter((link) => link.title);
  console.log("hello", links)

// const TechPage = ({ data }) => {
//   const articles = data.allSanityTechArticle.nodes;

  return (
    <Layout>
      <Seo title="tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityTechArticle {
      nodes {
        _id
        title
        url
      }
    }
  }
`;

export default TechPage;
