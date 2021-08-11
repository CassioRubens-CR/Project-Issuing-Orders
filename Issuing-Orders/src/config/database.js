require('dotenv').config()
require('mysql2/promise');

module.exports = {
  dialect: 'mysql',
  host: process.env.HOSTNAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_SCHEMA,
  define: {
    timestamp: true,
    // underscored: true,
  }
}
