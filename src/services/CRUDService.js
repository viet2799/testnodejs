const { connection } = require("../config/database");
const User = require("../models/User");

const getAllUser = async () => {
  //   const [results] = await connection.query(`select * from Users`);
  const results = await User.find();
  return results;
};

const getUserById = async (userId) => {
  //   let [results] = await connection.query("select * from Users where id = ? ", [
  //     userId,
  //   ]);
  //   let user = results && results.length > 0 ? results[0] : {};
  const userById = await User.findById(userId);
  return userById;
};

module.exports = {
  getAllUser,
  getUserById,
};
