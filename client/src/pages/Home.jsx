import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();



  return (
    <Layout title={"Best Offers - shop Now"}>
      <h1>homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
