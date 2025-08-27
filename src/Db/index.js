const mongoose = require("mongoose");
const { Database_Name } = require("../constant.js");
const DBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};
module.exports = DBConnect;
