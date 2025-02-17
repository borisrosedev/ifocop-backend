const { Sequelize } = require('sequelize')

const client = new Sequelize(
    'tearoom', 'root', 'caroline', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

module.exports = client
