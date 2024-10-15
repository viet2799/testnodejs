const { connection } = require("../config/database");

const getAllUser = async () => {
  const [results] = await connection.query(`select * from Users`);
  return results;
};

const getUserById = async (userId) => {
    let [results] = await connection.query('select * from Users where id = ? ', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}


module.exports = {
  getAllUser,
  getUserById
};
