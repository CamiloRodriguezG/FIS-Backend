const express = require('express')
const modelo = require('../models/camisetasModel')

const router = express.Router()

router.get('/:codigo',modelo.obtenerCamisetasPorCodigo)
router.get('/venta/:idVenta',modelo.obtenerCamisetasPorVenta)
router.post('/crearCamiseta', modelo.crearCamiseta)

module.exports = router;