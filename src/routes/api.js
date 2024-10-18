const express = require("express");
const routes = express.Router();
const {
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
  UploadSingleFile,
  UploadMultipleFile,
} = require("../controllers/apiController");

routes.get("/users", getAllUsers);
routes.post("/user", addUser);
routes.put("/user", editUser);
routes.delete("/user", deleteUser);
routes.post("/upload-file", UploadSingleFile);
routes.post("/upload-files", UploadMultipleFile);

module.exports = routes;
