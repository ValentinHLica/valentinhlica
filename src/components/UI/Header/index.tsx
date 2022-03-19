import React from "react";

import styles from "@styles/components/UI/Header/index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}></div>
    </header>
  );
};

export default Header;
