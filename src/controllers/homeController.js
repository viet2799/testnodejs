const { connection } = require("../config/database");
const { getAllUser, getUserById } = require("../services/CRUDService");
const User = require("../models/User");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getlistPage = async (req, res) => {
  const dataUser = await getAllUser();
  console.log('dataUser',dataUser);
  return res.render("listUsers.ejs", { listUsers: dataUser });
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('EditUser.ejs', { userEdit: user }); //x <- y
}


const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.City;

  await User.create({ email, name, city });

  res.send("oce r đó");
};


module.exports = {
  getHomepage,
  postCreateUser,
  getlistPage,
  getUpdatePage
};
