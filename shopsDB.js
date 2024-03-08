require("dotenv").config();

const connectDB = require("./dbs/connect");
const Product = require("./models/product");

const shopJson = require("./shops.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    await Product.create(shopJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();