const { Router } = require('express');
const {
    createProductHandler, 
    getAllProductHandler,
    getProductByIdHandler,
    getProductByNameHandler,
}=require('../handlers/productHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
router.post('/product/', createProductHandler);
router.get('/product/', getAllProductHandler);
router.get('/products/:id', getProductByIdHandler);

// Ruta para obtener un producto por nombre
router.get('/products/name/:name', getProductByNameHandler);

module.exports = router;