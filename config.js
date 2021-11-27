require('dotenv').config();

const config = {
    elephantHost: process.env.ELEPHANT_HOST,
    elephantUser: process.env.ELEPHANT_USER,
    elephantPassword: process.env.ELEPHANT_PASSWORD,
    elephantDatabase: process.env.ELEPHANT_DATABASE,
    elephantPort: process.env.ELEPHANT_PORT
};

module.exports = config;