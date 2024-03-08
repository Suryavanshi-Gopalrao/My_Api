const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
  },
  city: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: [true, "Number must be provided"],
  },
  email: {
    type: String,
    required: [true, "Email must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Shop", shopSchema);
