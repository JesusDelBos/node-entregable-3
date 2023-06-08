const Sequelize = require("sequelize");
//require('dotenv').config();

const db = new Sequelize({
    database: "entregable_3",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "root",
    dialect: "postgres"
  //dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  //logging: false,
});

module.exports = db;
