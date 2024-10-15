const express = require("express");
const routes = express.Router();
const { getHomepage, postCreateUser,getlistPage, getUpdatePage } = require("../controllers/homeController");

routes.get("/", getHomepage);
routes.get("/list-users", getlistPage);
routes.get('/update/:id', getUpdatePage);
routes.post("/create-user", postCreateUser);

module.exports = routes;
