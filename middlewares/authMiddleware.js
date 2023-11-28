const JWT = require("jsonwebtoken");
const userModel = require("../modals/userModal");

//protected route token base

const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.loginUser = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admnn access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.loginUser._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unAuthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin",
    });
  }
};

module.exports = { requireSignIn, isAdmin };
