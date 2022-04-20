//っ子のファイルが使用できるようmodels/index.jsのconfig変更

module.exports = {
  'development': {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_ROOT_PASSWORD,
    'database': process.env.MYSQL_DATABASE,
    'host': process.env.MYSQL_ROOT_HOST,
    "dialect": "mysql"
  },
  "test": {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_ROOT_PASSWORD,
    'database': process.env.MYSQL_DATABASE,
    'host': process.env.MYSQL_ROOT_HOST,
    "dialect": "mysql"
  },
  "production": {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_ROOT_PASSWORD,
    'database': process.env.MYSQL_DATABASE,
    'host': process.env.MYSQL_ROOT_HOST,
    "dialect": "mysql"
  }
};