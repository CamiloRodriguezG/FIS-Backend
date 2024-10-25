const express = require('express') 
const bodyParser = require('body-parser')
const config = require('./config')
const rutas = require('./controllers/rutas')

const app = express()

// Configuracion
app.set('port', config.app.port)

app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());

// Rutas
app.use(rutas)

module.exports = app