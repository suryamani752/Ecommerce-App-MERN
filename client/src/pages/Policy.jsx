import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"policy - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6 mt-3 ms-5">
          <img
            src="/images/privacy.jpg"
            alt="contact-us"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-md-4 contact-heading">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
