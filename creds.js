// CREATE TABLE demo(
//   key integer PRIMARY KEY,
//   description VARCHAR(255)  
// );
// only two attributes in the table: todo_id and description
const { Pool } = require('pg');
// you can also use the online posrgres database: elephantSQL
//https://www.youtube.com/watch?v=BuJj4LCWP_4
//#postgres://username:password@hostname:port/database

const pool = new Pool({
  host: "kashin.db.elephantsql.com",
  user: "oblployz",
  password: "Ds4vS4JQWmECJlEz4K78ccucOs8A1mNI",
  database: "oblployz",
  port: "5432",
});

module.exports = pool;
