const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  purpose: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
