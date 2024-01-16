const axios = require('axios')
const {Product} = require('../db')
require('dotenv').config()
//crear producto faltan completar varios aspectos para la integridad de los productos
const createProduct = async ({
    nombreProducto,
    productoId,
    medidas,
    proveedor,
    proveedorId,
    cantidad,
    fecha,
    costo,
    costoPrevio,
  }) => {
  const created = await Product.create({ nombreProducto,
    productoId,
    medidas,
    proveedor,
    proveedorId,
    cantidad,
    fecha,
    costo,
    costoPrevio,})

    return created
  };
  
  module.exports = {
    createProduct,
  };