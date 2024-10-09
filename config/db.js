const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Crear la conexion a DB MYSQL
const db = mysql .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = db;
