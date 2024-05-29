const express = require("express");
const authControllers = require("../controllers/auth_controller");
const router = express.Router();
const { signUpSchema, loginSchema } = require("../validator/signup_validation");
const validate = require("../middlewares/validate_middleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.route("/home").post(authControllers.home);
router
  .route("/register")
  .post(validate(signUpSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);
module.exports = router;
