const { Sequelize } = require('sequelize')

const client = new Sequelize(
    'mysql', 'root', 'caroline', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

async function test(){
    try {
        await client.authenticate()
        console.log('✅ Connexion avec la base de données réussie')
    } catch {
        console.log('❌ Erreur de connexion avec la bdd')
    }  
} 

test()