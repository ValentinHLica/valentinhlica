import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "@components/Layout";

import * as styles from "@styles/pages/blog.module.scss";

type Props = {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
        };
        slug: string;
        excerpt: string;
      }[];
    };
  };
};

const BlogPage: React.FC<Props> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <section className={styles.details}>
        <h1 className={styles.title}>Blog Posts</h1>
      </section>

      <section className={styles.posts}>
        {nodes.map((post, index) => {
          const {
            frontmatter: { title },
            slug,
            excerpt,
          } = post;

          return (
            <article key={index} className={styles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>

              <p>{excerpt}</p>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        slug
        excerpt
      }
    }
  }
`;

export default BlogPage;
