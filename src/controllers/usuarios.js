const express = require('express')
const modelo = require('../models/usuariosModel')

const router = express.Router()

router.get('/:cedula',modelo.obtenerUsuario)
router.post('/crearUsuario', modelo.crearUsuario)

module.exports = router;