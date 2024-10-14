const express = require("express");
const routes = express.Router();
const { getHomepage, postCreateUser } = require("../controllers/homeController");

routes.get("/", getHomepage);

routes.post("/create-user", postCreateUser);

module.exports = routes;
