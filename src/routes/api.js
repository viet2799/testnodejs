const express = require("express");
const routes = express.Router();
const { getAllUsers, addUser, editUser, deleteUser } = require("../controllers/apiController");

routes.get("/users", getAllUsers);
routes.post("/user", addUser);
routes.put("/user", editUser);
routes.delete("/user", deleteUser);

module.exports = routes;
