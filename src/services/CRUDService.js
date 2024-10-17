const { connection } = require("../config/database");
const User = require("../models/User");

const getAllUser = async () => {
  //   const [results] = await connection.query(`select * from Users`);
  const results = await User.find({});
  return results;
};

const getUserById = async (userId) => {
  const userById = await User.findById(userId);
  userById.sele;
  return userById;
};

const updateUserById = async ({ email, city, name, userId }) => {
  //   let [results, fields] = await connection.query(
  //     `
  //               UPDATE Users set email= ?, name=?, city=? WHERE id = ?
  //               `,
  //     [email, name, city, userId]
  //   );
  //   return results;
  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
};

const deleteUserById = async (UserId) => {
  //   let [results] = await connection.query(`DELETE FROM Users WHERE id = ?`, [
  //     UserId,
  //   ]);
  //   return results;
  //   const deleteUser = await User.findByIdAndDelete(UserId);
  //   return deleteUser;
  await User.deleteOne({ _id: UserId });
};

module.exports = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
