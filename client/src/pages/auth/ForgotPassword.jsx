import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgotPassword", {
        email,
        question,
        newPassword,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("wrong Email and password");
    }
  };

  return (
    <Layout title={"Forgot Password - Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="what is your Dog Name"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Set New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
