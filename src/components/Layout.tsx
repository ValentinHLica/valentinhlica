import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "@styles/main.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
