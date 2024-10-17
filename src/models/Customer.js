const { default: mongoose } = require("mongoose");

const customerShema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  dob: Date,
  description: String,
  image: String,
});

const Customer = mongoose.model("Customer", customerShema);

module.exports = Customer;
