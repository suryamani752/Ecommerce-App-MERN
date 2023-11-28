import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce App"}>
        <div className="row contactus">
          <div className="col-md-6 mt-3 ms-5">
            <img
              src="/images/contact-us.jpg"
              alt="contact-us"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4 contact-heading">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              Any query and info about product feel free to call anytime we 24x7
              available.
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.help@ecommerceapp.com
            </p>
            <p>
              <BiPhoneCall /> : xxxxxxxxxx
            </p>
            <p>
              <BiSupport /> : 0000-0000-0000(toll free)
            </p>
          </div>
        </div>
    </Layout>
  );
};

export default Contact;
