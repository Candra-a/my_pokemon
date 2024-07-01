const mongoose = require("mongoose");
require('dotenv').config()

async function connectDB() {
  try {
    const url = process.env.MONGODB_URL;
    await mongoose.connect(url);

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    
    process.exit(1);
  }
}

module.exports = connectDB