const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// secure password using bcrpt

userSchema.pre("save", async function (next) {
  console.log("pre method data is : ", this);
  const User = this;
  if (!User.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10); // const saltRound = 10;
    const hash_password = await bcrypt.hash(User.password, saltRound);
    User.password = hash_password;
  } catch (error) {
    error;
  }
});

// compare the user login password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
//JWT
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
const User = new mongoose.model("User", userSchema);
module.exports = User;
