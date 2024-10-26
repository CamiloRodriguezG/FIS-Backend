const express = require('express') 
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const rutas = require('./controllers/rutas')

// Documentacion
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path')

const swaggerSpecs = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FIS API 🤓☝️',
            version: '1.0.0',
            
        },
        contact: {
            name: 'Camilo 😈'
        },
        servers: [
            {
                url: "fis-backend-production.up.railway.app",
                description: "Servidor al que hacer las requests"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, "./controllers/*.js")}`
    ]
}

const app = express()

// Configuracion
app.set('port', config.app.port)

app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());
app.use(morgan("dev"))

// Rutas
// app.use('/', (req, res)=>{
//     res.send("Aca no hay nada, ir a /docs")
// })
app.use('/',rutas)
// Ruta para documentacion
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpecs)))

module.exports = app