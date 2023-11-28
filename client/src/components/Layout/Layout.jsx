import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { ToastContainer } from "react-toastify";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      {/* <h1>Layout</h1> */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "75vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - shop now",
  description: "MERN Stack project",
  keywords: "MERN, React, node, mongodb",
  author: "Suryamani kumar",
};

export default Layout;
