import React from "react";

import Navigation from "./Navigation";

import * as styles from "@styles/components/Header/index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <Navigation />
    </header>
  );
};

export default Header;
