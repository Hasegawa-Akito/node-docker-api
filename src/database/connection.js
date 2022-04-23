const mysql = require('mysql');

//mysqlに接続 poolを使い時間が経って接続が切れるのを防ぐ
const pool = mysql.createPool({
  //localでは.envファイルの値を使用
  host: process.env.MYSQL_ROOT_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});



// Export Connection
module.exports = pool;