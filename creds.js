// CREATE TABLE demo(
//   key integer PRIMARY KEY,
//   description VARCHAR(255)  
// );
// only two attributes in the table: todo_id and description
const { Pool } = require('pg');
// you can also use the online posrgres database: elephantSQL
//https://www.youtube.com/watch?v=BuJj4LCWP_4
//#postgres://username:password@hostname:port/database
import config from './config';
const pool = new Pool({
  host: config.elephantHost,
  user: config.elephantUser,
  password: config.elephantPassword,
  database: config.elephantDatabase,
  port: config.elephantPort,
});

module.exports = pool;
