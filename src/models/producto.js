const sequelize = require("./../config/conexion");

const { Sequelize, DataTypes } = require('sequelize');

const Producto = sequelize.define(
    'Producto',
    {
        // Model attributes are defined here
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(12, 2),
            // allowNull defaults to true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            // allowNull defaults to true
        },
        imagen: {
            type: DataTypes.STRING(255),
            // allowNull defaults to true
        },
        descripcion: {
            type: DataTypes.TEXT,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
    },
);

// migra la tabla
Producto.sync();

module.exports = Producto;