const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

// Configurar dotenv
dotenv.config();

const app = express();
app.use(express.json()); // Para procesar JSON en las solicitudes








// Cambia la ruta estática a la carpeta "shop"
app.use(express.static(path.join(__dirname, 'shop')));

// Rutas de la API de productos
app.use('/api/product', productRoutes);

// Ruta para servir el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
