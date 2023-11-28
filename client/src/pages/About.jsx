import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6 mt-5 ms-5">
          <img
            src="/images/About.jpg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 contact-heading">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            incidunt laboriosam suscipit quod praesentium deleniti dolore.
            Doloribus quas asperiores amet provident libero perferendis ad
            perspiciatis fuga recusandae? Quam voluptate quibusdam, eligendi
            deleniti consequatur ut in impedit fugit tenetur qui excepturi
            aliquid, pariatur eaque. Cum asperiores quae eum eaque consectetur?
            Fugiat.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
