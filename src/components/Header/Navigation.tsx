import React from "react";
import { Link } from "gatsby";

import navItems from "@data/navigation.json";

import * as styles from "@styles/components/Header/navigation.module.scss";

const Navigation: React.FC = () => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className={styles.navigation}>
      <ul>
        {(
          navItems as {
            title: string;
            url: string;
          }[]
        ).map((item, index) => {
          const { title, url } = item;

          return (
            <li
              key={index}
              className={pathname === url ? styles.current_page : ""}
            >
              <Link
                to={url}
                target={url.startsWith("http") ? "_blank" : "_self"}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
