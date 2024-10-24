const express = require('express') 
const config = require('./config')
const rutas = require('./controllers/rutas')

const app = express()

// Configuracion
app.set('port', config.app.port)

// Rutas
app.use(rutas)

module.exports = app