const express = require('express')
const modelo = require('../models/ventasModel')
const { route } = require('./estadosEstampas')

const router = express.Router()

router.get('/:idVenta', modelo.obtenerVentaPorId)
router.get('/usuario/:cedula',modelo.obtenerVentasPorUsuario)
router.get('/usuario/venta', modelo.obtenerVentasUsuarioPorEstado)
router.post('/crearVenta', modelo.crearVenta)

module.exports = router;