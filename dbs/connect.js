const mongoose = require("mongoose");


const connectDB = (uri) => {
//   console.log("i am in db");

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
