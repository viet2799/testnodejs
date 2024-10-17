const { default: mongoose } = require("mongoose");
const { type } = require("os");

const customerShema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    dob: { type: Date, default: Date.now },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerShema);

module.exports = Customer;
