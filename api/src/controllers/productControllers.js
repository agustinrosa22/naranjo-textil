const axios = require('axios')
const {Product} = require('../db')
require('dotenv').config()
//crear producto faltan completar varios aspectos para la integridad de los productos
const createProduct = async ({
    nombreProducto,
    image,
    productoId,
    medidas,
    proveedor,
    proveedorId,
    cantidad,
    fecha,
    costo,
    costoPrevio,
    regPrevio
  }) => {
  const created = await Product.create({ nombreProducto,
    image,
    productoId,
    medidas,
    proveedor,
    proveedorId,
    cantidad,
    fecha,
    costo,
    costoPrevio,
    regPrevio})

    return created
  };
  //controller para traer todos los productos
  const getAllProduct = async () =>{
    const databaseProduct = await Product.findAll();

    return databaseProduct
  }
  module.exports = {
    createProduct,
    getAllProduct,
  };