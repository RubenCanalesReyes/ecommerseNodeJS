const db = require('../config/db');

// Funciones para interactuar con la DB
const Product = {
    // GET
    getAll: (callback) => {
        const query = 'SELECT * FROM `products`';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM products WHERE id = ?';
        db.query(query, [id], callback);
    },
    // CREATE
    create: (data, callback) => {
        const query = 'INSERT INTO products (name, description, price) values(? , ? , ?)';
        db.query(query, [data.name, data.description, data.price], callback);
    },
    // UPGRADE
    update: (id, data, callback) => {
        const query = 'UPDATE products SET name = ?, description = ?, price = ? WHERE  id = ?';
        db.query(query, [data.name, data.description, data.price, id], callback);
    },
    // DELETE
    delete: (id, callback) => {
        const query = 'DELETE FROM products WHERE id = ?';
        db.query(query, [id], callback);
    },

};

module.exports = Product;