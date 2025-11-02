const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_crud_express_productos', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

async function testConexion() {
    try {
        await sequelize.authenticate();
        console.log('Conectado con base de datos');
    } catch (error) {
        console.error('Conexion fallida:', error);
    }
}

testConexion()

module.exports = sequelize;