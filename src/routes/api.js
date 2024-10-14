const express = require("express");
const routes = express.Router();
const { getHomepage } = require("../controllers/homeController");

routes.get("/", getHomepage);

module.exports = routes;
