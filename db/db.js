const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'king4259', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = { sequelize };