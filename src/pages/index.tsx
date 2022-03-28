import React from "react";

import Layout from "@components/Layout";
import Seo from "@components/Seo";

import * as styles from "@styles/pages/index.module.scss";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Seo />

      <section>HomePage</section>
    </Layout>
  );
};

export default HomePage;
