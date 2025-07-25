const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/hospital";

// Database configuration function
const dbConfig = () => {
    mongoose
      .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connected successfully.");
      })
      .catch((error) => {
        console.error("Database connection error:-", error);
      });
};

module.exports = dbConfig;