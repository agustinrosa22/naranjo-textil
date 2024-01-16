const axios = require('axios');
const { createProduct } = require('../controllers/productControllers');

const createProductHandler = async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const {
      nombreProducto,
      productoId,
      medidas,
      proveedor,
      proveedorId,
      cantidad,
      fecha,
      costo,
      costoPrevio,
    } = req.body;

    // Llama al controlador para crear el producto
    const newProduct = await createProduct({
      nombreProducto,
      productoId,
      medidas,
      proveedor,
      proveedorId,
      cantidad,
      fecha,
      costo,
      costoPrevio,
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

module.exports = {
  createProductHandler,
};
    