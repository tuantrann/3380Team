
const { Pool } = require('pg');
const config  = require('./config');


const pool = new Pool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  port: config.dbPort,
});

module.exports = pool;
