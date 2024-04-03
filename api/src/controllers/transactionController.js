const { Transaction, Product } = require('../db');

const sellProduct = async (req, res, next) => {
  try {
    const { productId, userId, cantidad, fecha, costo, vendedor, comentario } = req.body;

    // Verificar si el producto existe y está disponible
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    if (product.cantidad < cantidad) {
      return res.status(400).json({ message: 'No hay suficiente stock disponible' });
    }

    // Obtener la fecha actual si no se proporciona ninguna fecha
    const ventaFecha = fecha ? new Date(fecha) : new Date();

    // Crear la transacción con los campos adicionales
    const transaction = await Transaction.create({
      productId,
      userId,
      cantidad,
      fecha: ventaFecha,
      costo,
      vendedor,
      comentario,
    });

    // Actualizar la cantidad de stock del producto
    product.cantidad -= cantidad;
    await product.save();

    res.status(201).json({ message: 'Venta realizada con éxito', transaction });
  } catch (error) {
    next(error);
  }
};

const getAllTransactions = async (req, res, next) => {
  try {
    // Consultar todas las transacciones
    const transactions = await Transaction.findAll();

    // Verificar si hay transacciones
    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: 'No se encontraron transacciones' });
    }

    // Devolver las transacciones encontradas
    res.status(200).json({ transactions });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sellProduct,
  getAllTransactions,
};
