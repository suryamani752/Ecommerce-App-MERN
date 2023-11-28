const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to MongoDb database ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`mongodb erro ${error.message}`.bgRed.white);
  }
};

module.exports = connectDb;
