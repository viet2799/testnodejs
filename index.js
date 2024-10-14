const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
require("dotenv").config();

const app = express();
const port = 3000;
require("dotenv").config();
configViewEngine(app);

app.use("/", webRoutes);

connection.query("SELECT * FROM Users", (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
  console.log("Query results:", results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
