const jwt = require("jsonwebtoken");
const user = require("../models/user_models");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization") || req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized, Token not provided" });
  }

  try {
    const jwttoken = token.replace("Bearer ", "");
    const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);
    const userData = await user
      .findOne({ email: isVerified.email })
      .select({ password: 0 });
    if (!userData) {
      throw new Error("User not found");
    }
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return res.status(401).json({ msg: "Unauthorized, Invalid token" });
  }
};

module.exports = authMiddleware;

module.exports = authMiddleware;
