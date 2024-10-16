require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
const { default: mongoose } = require("mongoose");
const app = express();

const port = 3000;
configViewEngine(app);
app.use("/", webRoutes);

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({ name: 'Silence' });
console.log(cat.name); // 'Silence'

 cat.save();

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
