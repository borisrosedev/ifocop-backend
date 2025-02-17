const route = require('express').Router()
const { login, create } = require('../controllers/user')

route.post('/login', login)
route.post('/create', create)

module.exports = route