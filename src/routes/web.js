const express = require("express");
const routes = express.Router();
const {
  getHomepage,
  postCreateUser,
  getlistPage,
  getUpdatePage,
  EditUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

routes.get("/", getHomepage);
routes.get("/list-users", getlistPage);
routes.get("/update/:id", getUpdatePage);
routes.post("/create-user", postCreateUser);
routes.post("/edit-user", EditUser);
routes.post('/delete-user/:id', postDeleteUser);
routes.post('/delete-user', postHandleRemoveUser);

module.exports = routes;
