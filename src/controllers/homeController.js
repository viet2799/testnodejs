const { connection } = require("../config/database");
const { getAllUser, getUserById } = require("../services/CRUDService");

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

  let [results, fields] = await connection.query(
    `INSERT INTO
        Users (email, name, city)
         VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log("results", results);
  console.log("fields", fields);
  res.send("oce r đó");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getlistPage,
  getUpdatePage
};
