// models/Transaction.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Transaction = sequelize.define('Transaction', {
    cantidad: {
      type: DataTypes.INTEGER,
    },
    costo: {
      type: DataTypes.FLOAT,
    },
    vendedor: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    comentario: {
      type: DataTypes.STRING,
    },
    nombreProducto: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING,
    },
    clase: {
      type: DataTypes.STRING,
    },
    costoPrevio: {
      type: DataTypes.FLOAT,
    },
    // Otros campos según sea necesario
  });

  return Transaction;
};