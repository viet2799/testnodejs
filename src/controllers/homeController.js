const { connection } = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log("req homeController", req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.City;
  console.log("email", email);
  console.log("name", name);
  console.log("city", city);
  connection.query(
    `INSERT INTO Persons  (email, name, city) VALUES (?,?,?)
    `,
    [email, name, city],
    function (err, result) {
      console.log("result", result);
      res.send("oce r đó");
    }
  );
};

module.exports = {
  getHomepage,
  postCreateUser,
};
