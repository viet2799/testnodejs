const { connection } = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getlistPage = async (req, res) => {
  const [results, fields] = await connection.query(`select * from Users`);
  console.log("results", results);
  return res.render("listUsers.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.City;

  //   console.log("email", email);
  //   console.log("name", name);
  //   console.log("city", city);
  //   connection.query(
  //     `INSERT INTO
  //       Users (email, name, city)
  //        VALUES (?,?,?)`,
  //     [email, name, city],
  //     function (err, results) {
  //       res.send("oce r đó");
  //     }
  //   );

  //   const [rows, fields] = await connection.execute("SELECT * FROM Users");
  //   console.log('row',rows);
  //   console.log('fields',fields);

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
};
