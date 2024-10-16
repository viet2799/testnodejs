const { connection } = require("../config/database");

const getAllUser = async () => {
  const [results] = await connection.query(`select * from Users`);
  return results;
};

const getUserById = async (userId) => {
  let [results] = await connection.query("select * from Users where id = ? ", [
    userId,
  ]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
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
  updateUserById,
  getUserById,
  deleteUserById
};
