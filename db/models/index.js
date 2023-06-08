const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');
class User extends Model {}
User.init({
    // attributes
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
            // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'user'
        // options
});

sequelize.sync();


module.exports = { User }