const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
const dbClient = require('../connect');

class User extends Model {}

User.init({

    firstName : {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('firstName', value.charAt(0).toUpperCase() 
            + value.slice(1).toLowerCase())
        }
    },

    lastName : {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('lastName', value.charAt(0).toUpperCase() 
            + value.slice(1).toLowerCase())
        }
    },

    email : {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type:DataTypes.TEXT,
        allowNull: false,
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, 10));
        }
    }
}, {
    sequelize: dbClient,
    modelName: 'User'
})

console.log(User === dbClient.models.User); 

// async function synchronizeWithTheDb(){
//     await User.sync({ alter: true})
// }

// synchronizeWithTheDb()

module.exports = User