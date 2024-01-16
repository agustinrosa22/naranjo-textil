const { Router } = require('express');
const {createProductHandler}=require('../handlers/productHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/product/', createProductHandler);

module.exports = router;