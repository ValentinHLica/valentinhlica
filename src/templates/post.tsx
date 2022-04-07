import React from "react";
import { graphql } from "gatsby";

import { ImageDataLike } from "gatsby-plugin-image";

import Layout from "@components/Layout";
import Seo from "@components/Seo";

import * as styles from "@styles/components/post.module.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        image: {
          publicURL: string;
          childImageSharp: ImageDataLike;
        };
      };
      excerpt: string;
      body: any;
      slug: string;
    };
  };
};

const PostPage: React.FC<Props> = ({
  data: {
    mdx: {
      frontmatter: { title },
      body,
      slug,
      excerpt,
    },
  },
}) => {
  return (
    <Layout>
      <Seo title={title} desc={excerpt} />

      <article className={styles.post}>
        <section className={styles.details}>
          <h1 className={styles.title}>{title}</h1>
        </section>

        <section className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      slug
      excerpt
    }
  }
`;

export default PostPage;
