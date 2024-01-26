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
      type: DataTypes.STRING, // Usa STRING en lugar de DATE
      defaultValue: () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
      },
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
