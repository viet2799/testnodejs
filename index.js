require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const apiRoutes = require("./src/routes/api");
const { connection } = require("./src/config/database");
const fileUpload = require("express-fileupload");
const app = express();
const port = 3000;
configViewEngine(app);

app.use(fileUpload());
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

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
