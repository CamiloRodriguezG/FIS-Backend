const express = require('express')
const multer = require('multer')
const modelo = require('../models/estampasModel')
const FILE_TYPE_MAP = {
    'image/png' : 'png',
    'image/jpeg' : 'jpeg',
    'image/jpg' : 'jpg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/imagenes-estampas')
    },
    filename: function (req, file, cb) {
        const extension = FILE_TYPE_MAP[file.mimetype]
        const nombreArchivo = file.originalname.replace(' ', '-').replace('.' + extension, '')
        cb(null, nombreArchivo + '-' + Date.now() + '.' + extension)
    }
})

const upload = multer({ storage: storage })

const router = express.Router()

router.get('/:codigoEstampa', modelo.obtenerEstampaPorId)
router.get('/artista/:cedula', modelo.obtenerEstampasPorArtista)
router.get('/clasificacion/:idClasificacion', modelo.obtenerEstampasPorClasificacion)
router.post('/crearEstampa', upload.single('imagen'), modelo.crearEstampa)

module.exports = router;