const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
    Product.getAll((err, result) => {
        if (err) return res.status(500).json({ error: 'Error al obtener los productos' });
        res.json(result);
    });
});

// Obtener producto por Id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({error: 'error'})
        }
            
        if (results.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(results[0]);
    });
});

// Crear nuevo producto (POST)
router.post('/', (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const newProduct = { name, description, price };

    Product.create(newProduct, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear el producto' });
        res.status(201).json({ message: 'Producto creado correctamente', product: result });
    });
});

// Actualizar producto (PUT)
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const updatedProduct = { name, description, price };

    Product.update(id, updatedProduct, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el producto' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto actualizado correctamente' });
    });
});

// Eliminar producto (DELETE)
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Product.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar el producto' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto eliminado correctamente' });
    });
});

module.exports = router;




// INSERT INTO products (name, description, price)
// 	values("Targeta grafica Nvidia RTX 4090 Super","Targeta grafica dedicada exclucivamente para experiancia raytraicing para graficos fotorealistas" ,"50000")
