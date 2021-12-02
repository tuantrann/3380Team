require('dotenv').config();

const config = {
    elephantHost: process.env.ELEPHANT_HOST,
    elephantUser: process.env.ELEPHANT_USER,
    elephantPassword: process.env.ELEPHANT_PASSWORD,
    elephantDatabase: process.env.ELEPHANT_DATABASE,
    elephantPort: process.env.ELEPHANT_PORT,

    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_DATABASE,
    dbPort: process.env.DB_PORT
};

module.exports = config;