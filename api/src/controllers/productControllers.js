const axios = require('axios')
const {Product} = require('../db')
const { Op } = require('sequelize');
const sequelize = require('sequelize');
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
    regPrevio,
    tipo,
    clase
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
    regPrevio,
    tipo,
    clase
  })

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
  const product = await Product.findAll({
    where: sequelize.where(
      sequelize.fn('LOWER', sequelize.col('nombreProducto')),
      'LIKE',
      `%${productName.toLowerCase()}%`
    )
  });
  return product;
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const {
    nombreProducto,
    medidas,
    proveedor,
    proveedorId,
    cantidad,
    fecha,
    costo,
    costoPrevio,
    tipo,
    productoId,
    regPrevio,
    image,
    clase,
  } = req.body;

  try {
    // Buscar el producto por ID
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error('Producto no encontrado');
    }

    // Actualizar las propiedades del producto
    product.nombreProducto = nombreProducto;
    product.medidas = medidas;
    product.proveedor = proveedor;
    product.proveedorId = proveedorId;
    product.cantidad = cantidad;
    product.fecha = fecha;
    product.costo = costo;
    product.costoPrevio = costoPrevio;
    product.tipo = tipo;
    product.productoId = productoId;
    product.regPrevio = regPrevio;
    product.image = image;
    product.clase = clase;

    // Guardar los cambios
    await product.save();

    return product;
  } catch (error) {
    // Puedes loguear el error si es necesario
    console.error(error);

    // Dejar que el handler maneje la respuesta HTTP
    throw error;
  }
};


  module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    getProductByName,
    editProduct,
  };