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
  const updateFields = req.body; // Obtener los campos enviados en la solicitud

  try {
    // Buscar el producto por ID
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error('Producto no encontrado');
    }

    // Actualizar solo los campos que se envían en la solicitud
    for (const key in updateFields) {
      if (Object.hasOwnProperty.call(updateFields, key)) {
        product[key] = updateFields[key];
      }
    }

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

const filtrarProductos = async (req, res) => {
  try {
    // Obtener los parámetros de la solicitud de búsqueda
    const { medidas, tipo, clase, precioMin, precioMax } = req.query;

    // Crear un objeto de opciones de búsqueda
    const options = {};

    // Filtrar por medidas si se proporciona
    if (medidas) {
      options.medidas = JSON.parse(medidas);
    }

    // Filtrar por tipo si se proporciona
    if (tipo) {
      options.tipo = tipo;
    }

    // Filtrar por clase si se proporciona
    if (clase) {
      options.clase = clase;
    }

    if (precioMin || precioMax) {
      options.costo = {};
      if (precioMin) {
        options.costo[Op.gte] = precioMin;
      }
      if (precioMax) {
        options.costo[Op.lte] = precioMax;
      }
    }


    // Realizar la búsqueda utilizando los filtros proporcionados
    const productosFiltrados = await Product.findAll({
      where: options
    });

    // Devolver los resultados de la búsqueda
    res.status(200).json(productosFiltrados);
  } catch (error) {
    // Manejar errores
    console.error('Error al filtrar productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



  module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    getProductByName,
    editProduct,
    filtrarProductos,
  };