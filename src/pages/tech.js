import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const TechPage = ({ data }) => {
  const articles = data.allSanityTechArticle.nodes;

  return (
    <Layout>
      <Seo title="tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const article = graphql`
  query {
    allSanityTechArticle {
      nodes {
        title
        url
      }
    }
  }
`;

export default TechPage;
