import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Seo from "@components/Seo";

import * as styles from "@styles/pages/index.module.scss";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Seo />

      <section className={styles.info}>
        <h1 className={styles.title}>Valentin Lica</h1>

        <p className={styles.description}>
          Writer, Speaker, Developer Advocate. I help devtools cross the chasm
          (React + TypeScript, Svelte, Netlify, now Temporal) and help
          developers Learn in Public!
        </p>

        <Link to="/about" className={styles.more}>
          More on About Page
        </Link>
      </section>
    </Layout>
  );
};

export default HomePage;
