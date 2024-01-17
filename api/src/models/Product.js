// models/Product.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    nombreProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    productoId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medidas: {
      type: DataTypes.STRING,
    },
    proveedor: {
      type: DataTypes.STRING,
    },
    proveedorId: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    costo: {
      type: DataTypes.FLOAT,
    },
    regPrevio: {
      type: DataTypes.FLOAT,
    },
    costoPrevio: {
      type: DataTypes.FLOAT,
    },
    // Otros campos según sea necesario
  });

  return Product;
};
