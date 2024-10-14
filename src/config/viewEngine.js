const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  app.use(express.static(path.join("./src", "public")));

  //config req.body
  app.use(express.json()); // Used to parse JSON bodies
  app.use(express.urlencoded()); //Parse URL-encoded bodies
};

module.exports = configViewEngine;
