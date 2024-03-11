const { Router } = require('express');
const {
    createProductHandler, 
    getAllProductHandler,
    getProductByIdHandler,
    getProductByNameHandler,
    editProductHandler ,
}=require('../handlers/productHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
router.post('/product/', createProductHandler);
router.get('/product/', getAllProductHandler);
router.get('/product/:id', getProductByIdHandler);
router.put('/product/:id', editProductHandler);

// Ruta para obtener un producto por nombre
router.get('/products/name/:name', getProductByNameHandler);

module.exports = router;