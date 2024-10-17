const User = require("../models/User");
const {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getlistPage = async (req, res) => {
  const dataUser = await getAllUser();
  return res.render("listUsers.ejs", { listUsers: dataUser });
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("EditUser.ejs", { userEdit: user }); //x <- y
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await User.create({ email, name, city });

  res.redirect("/list-users");
};

const EditUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let id = req.body.id;
  updateUserById({ email, name, city, userId: id });
  res.redirect("/list-users");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);

  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = (req, res) => {
  deleteUserById(req.body.userId);
  res.redirect("/list-users");
};


module.exports = {
  getHomepage,
  postCreateUser,
  getlistPage,
  getUpdatePage,
  EditUser,
  postDeleteUser,
  postHandleRemoveUser,
};
