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

const updateUserById = async ({ email, city, name, userId }) => {
  let [results, fields] = await connection.query(
    `
              UPDATE Users set email= ?, name=?, city=? WHERE id = ?
              `,
    [email, name, city, userId]
  );
  return results;
};

const deleteUserById = async (UserId) => {
  let [results] = await connection.query(`DELETE FROM Users WHERE id = ?`, [
    UserId,
  ]);
  return results;
};

module.exports = {
  getAllUser,
  getUserById,
  updateUserById,
  getUserById,
  deleteUserById,
};
