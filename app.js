require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./dbs/connect");

const products_routes = require("./routes/products");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi, i am Server");
});


app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    app.listen(PORT, () => {
      console.log(`${PORT} Server conected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
