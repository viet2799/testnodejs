const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const results = await User.find({});
  return res.status(200).json({
    status: 200,
    data: results,
  });
};

const addUser = async (req, res) => {
  console.log("req", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });

  console.log("user", user);

  return res.status(200).json({
    status: 200,
    data: user,
  });
};

const editUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );

  return res.status(200).json({
    statusn: 200,
    data: user,
  });
};

const deleteUser = async (req, res) => {
  let userId = req.body.userId;
  let user = await User.deleteOne({ _id: userId });

  return res.status(200).json({
    statusn: 200,
    data: user,
  });
};

module.exports = {
  getAllUsers,
  addUser,
  editUser,
  deleteUser
};
