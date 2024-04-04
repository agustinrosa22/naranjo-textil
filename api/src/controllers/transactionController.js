const { Transaction, Product } = require('../db');
const { Op } = require('sequelize');

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
    const { startDate, endDate } = req.query;

    // Definir opciones de consulta para filtrar por fechas
    const options = {};
    if (startDate && endDate) {
      options.where = {
        fecha: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      };
    } else if (startDate) {
      options.where = {
        fecha: {
          [Op.gte]: new Date(startDate),
        },
      };
    } else if (endDate) {
      options.where = {
        fecha: {
          [Op.lte]: new Date(endDate),
        },
      };
    }

    // Consultar las transacciones con las opciones de filtrado
    const transactions = await Transaction.findAll(options);

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

//http://tu-servidor/api/transactions?startDate=2024-01-01&endDate=2024-01-31


module.exports = {
  sellProduct,
  getAllTransactions,
};
