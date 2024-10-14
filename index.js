require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
const app = express();
const port = 3000;
configViewEngine(app); 
app.use("/", webRoutes);



connection.query("SELECT * FROM Persons", (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
