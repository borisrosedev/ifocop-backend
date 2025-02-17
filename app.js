const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./app/routes/user')
const app = express()
const dbClient = require('./app/database/connect')

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
// this above says that anyone can communicate with this backend
async function connectionToDatabase(){
    try {
        await dbClient.authenticate()
        console.log('✅ Connexion avec la base de données réussie')
    } catch {
        console.log('❌ Erreur de connexion avec la bdd')
    }  
} 

connectionToDatabase()
app.use('/api/v1/user', userRoutes)


module.exports = app
// this above renders the app exportable
