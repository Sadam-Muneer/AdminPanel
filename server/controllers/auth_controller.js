const User = require("../models/user_models");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    const data = req.body;
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send({ msg: "Error Cautch" });
  }
};

// register route

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const phoneExist = await User.findOne({ phone });
    if (phoneExist) {
      return res.status(400).json({
        msg: "Phone number already exists and",
      });
    }

    const userCreated = await User.create({
      username: String(username),
      email,
      phone: phone,
      password,
    });
    res.status(201).json({
      msg: userCreated, // if you don't want to send the data simply msg :"registration successful"
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

//login logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const isPasswordCorrect = await userExist.comparePassword(password);
    if (isPasswordCorrect) {
      res.status(200).json({
        email: email,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

//to send user data =>  user Logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).send({ userData });
  } catch (error) {
    res.status(400).send({ msg: "Error from the user route", error });
  }
};

module.exports = { home, register, login, user };
