const express = require('express')
const modelo = require('../models/estampasModel')

const router = express.Router()

router.get('/:id', modelo.obtenerEstampaPorId)
router.get('/artista/:cedula', modelo.obtenerEstampasPorArtista)
router.get('/clasificacion/:idClasificacion', modelo.obtenerEstampasPorClasificacion)
router.post('/crearEstampa', modelo.crearEstampa)

module.exports = router;