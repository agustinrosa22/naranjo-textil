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
    // Otros campos según sea necesario
  });

  return Transaction;
};