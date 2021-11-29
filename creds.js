
const { Pool } = require('pg');
const config  = require('./config');


const pool = new Pool({
  host: config.elephantHost,
  user: config.elephantUser,
  password: config.elephantPassword,
  database: config.elephantDatabase,
  port: config.elephantPort,
});

module.exports = pool;
