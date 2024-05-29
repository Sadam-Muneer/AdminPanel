const mongoose = require("mongoose");
const URL = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connection Successful");
  } catch (error) {
    console.log("Database Not Connected");
    process.exit(0);
  }
};
module.exports = connectDB;
