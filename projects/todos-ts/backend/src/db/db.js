const mysql = require("mysql");
require("dotenv").config();
const { promisify } = require("util");

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

pool.getConnection((err, connection) => {
  console.log(err);

  if (connection) {
    connection.release();
    console.log("DB is connected");
    return;
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
