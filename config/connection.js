// Import the Sequelize constructor from the library

const Sequelize = require('sequelize');

// Import dotenv package to read .env file

require('dotenv').config();

//declare a variable to hold the connection

let sequelize;

// Use JAWSDB_URL as the connection string if it exists, otherwise use the local database

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// Export the connection
module.exports = sequelize;