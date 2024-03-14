const axios = require('axios');
const { 
  createProduct, 
  getAllProduct,
  getProductById,
  getProductByName, 
  editProduct,
} = require('../controllers/productControllers');

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
      regPrevio,
      tipo,
      clase
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
      regPrevio,
      tipo,
      clase
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

// Manejador para obtener un producto por ID
const getProductByIdHandler = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await getProductById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Producto obtenido exitosamente',
      data: product,
    });
  } catch (error) {
    console.error('Error al obtener producto por ID:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener producto por ID',
    });
  }
};

// Manejador para obtener un producto por nombre
const getProductByNameHandler = async (req, res) => {
  const productName = req.params.name;
  try {
    const product = await getProductByName(productName);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Producto obtenido exitosamente',
      data: product,
    });
  } catch (error) {
    console.error('Error al obtener producto por nombre:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener producto por nombre',
    });
  }
};

const editProductHandler = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamar al controlador para editar el producto
    const editedProduct = await editProduct(req, res);

    // Manejar la respuesta HTTP exitosa
    return res.status(200).json(editedProduct);
  } catch (error) {
    // Manejar el error y enviar la respuesta HTTP correspondiente
    return res.status(404).json({ error: error.message });
  }
};
module.exports = {
  createProductHandler,
  getAllProductHandler,
  getProductByIdHandler,
  getProductByNameHandler,
  editProductHandler
};
    