require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
const app = express();
const port = 3000;
configViewEngine(app);
app.use("/", webRoutes);
const mongoose = require('mongoose');
// connection.query("SELECT * FROM Users", (err, results) => {
//   if (err) {
//     console.error("Error executing q uery:", err);
//     return;
//   }
// });
const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Hoi Dan IT cat ' });
cat.save();


(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
