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

  // Obtener un producto por ID
const getProductById = async (productId) => {
  const product = await Product.findByPk(productId);
  return product;
}

// Obtener un producto por nombre
const getProductByName = async (productName) => {
  const product = await Product.findOne({
    where: {
      nombreProducto: productName,
    },
  });
  return product;
}
  module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    getProductByName,
  };