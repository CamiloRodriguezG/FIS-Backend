const express = require('express')

// Controladores
const estadosEstampas = require('./estadosEstampas')
const usuarios = require('./usuarios')
const estampas = require('./estampas')
const camisetas = require('./camisetas')

// Rutas
const routerAPI = express.Router()
routerAPI.use('/estadosEstampas', estadosEstampas)
// routerAPI.use('/usuarios', usuarios)
// routerAPI.use('/estampas', estampas)
// routerAPI.use('/camisetas', camisetas)

module.exports = routerAPI