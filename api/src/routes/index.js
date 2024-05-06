const { Router } = require('express');
const {
    createProductHandler, 
    getAllProductHandler,
    getProductByIdHandler,
    getProductByNameHandler,
    editProductHandler ,
}=require('../handlers/productHandler')
const { createUserHandler,
    getAllUsersHandler,
 } = require('../handlers/userHandler')
const { sellProductHandler } = require('../handlers/transactionHandler');
const { getAllTransactions, deleteTransaction } = require('../controllers/transactionController')
const { loginController } = require('../controllers/usersControllers')
const { filtrarProductos, deleteProduct } = require('../controllers/productControllers')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
router.post('/user/', createUserHandler);
router.post('/product/', createProductHandler);
router.post('/sell', sellProductHandler);
router.post('/login', loginController.login);

router.get('/product/', getAllProductHandler);
router.get('/product/:id', getProductByIdHandler);
router.get('/products/name/:name', getProductByNameHandler);
router.get('/user/', getAllUsersHandler);
router.get('/products/filter', filtrarProductos);
router.get('/sell/', getAllTransactions);

router.put('/product/:id', editProductHandler);

router.delete('/product/:id', deleteProduct); 
router.delete('/transactions/:transactionId', deleteTransaction);

module.exports = router;