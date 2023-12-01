const userModel = require("../modals/userModal");
const { comparePassword, hashPassword } = require("../utils/authHelper");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, question } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!phone) {
      return res.send({ message: "phone is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }
    if (!question) {
      return res.send({ message: "question is required" });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exist please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      question,
    }).save();
    res.status(201).send({
      success: true,
      message: "user registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in register Controller",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const loginUser = await userModel.findOne({ email });
    if (!loginUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const match = await comparePassword(password, loginUser.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //token
    const token = await JWT.sign(
      { _id: loginUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).send({
      success: true,
      message: "login successful",
      loginUser: {
        name: loginUser.name,
        email: loginUser.email,
        phone: loginUser.phone,
        address: loginUser.address,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in loginController",
      error,
    });
  }
};

//test controller
const testController = (req, res) => {
  console.log("procted route");
};

//forgot password
const forgotPasswordController = async (req, res) => {
  try {
    const { email, question, newPassword } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!question) {
      return res.status(400).send({ message: "Question is required" });
    }
    if (!newPassword) {
      return res.status(400).send({ message: "New password is required" });
    }
    //check
    const user = await userModel.findOne({ email, question });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong email or question",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "new password changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "error in forgot password",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
};
