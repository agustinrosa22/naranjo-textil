const axios = require('axios');
const { createProduct, getAllProduct } = require('../controllers/productControllers');

const createProductHandler = async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const {
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
    } = req.body;

    // Llama al controlador para crear el producto
    const newProduct = await createProduct({
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
    });

    // Responde con el nuevo producto creado
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: newProduct,
    });
  } catch (error) {
    // Maneja errores y responde con un mensaje de error
    console.error('Error al crear el producto:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al crear el producto',
    });
  }
};

const getAllProductHandler = async (req, res) => {
  try {
    // Llama al controlador para obtener todos los productos
    const allProducts = await getAllProduct();

    // Responde con la lista de productos
    res.status(200).json({
      success: true,
      message: 'Productos obtenidos exitosamente',
      data: allProducts,
    });
  } catch (error) {
    // Maneja errores y responde con un mensaje de error
    console.error('Error al obtener todos los productos:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener todos los productos',
    });
  }
};

module.exports = {
  createProductHandler,
  getAllProductHandler
};
    