const respuestas = require('../res')
const DAO = require('../DAO/estampasDAO')

async function obtenerEstampaPorId(req, res){
    try {
        const resultado = await DAO.obtenerEstampaPorId(req.params.codigoEstampa)
        respuestas.success(req, res, resultado, 200)
    } catch (error) {
        respuestas.error(req, res, error.message, 500)
    }
}

async function obtenerEstampasPorArtista(req, res){
    try {
        const resultado = await DAO.obtenerEstampasPorArtista(req.params.cedula)
        respuestas.success(req, res, resultado, 200)
    } catch (error) {
        respuestas.error(req, res, error.message, 500)
    }
}

async function obtenerEstampasPorClasificacion(req, res){
    try {
        const resultado = await DAO.obtenerEstampasPorClasificacion(req.params.idClasificacion)
        respuestas.success(req, res, resultado, 200)
    } catch (error) {
        respuestas.error(req, res, error.message, 500)
    }
}

async function crearEstampa(req, res){
    const pathBase = `${req.protocol}://${req.get('host')}/src/public/imagenes-estampas/`
    const nombreArchivo = req.file.filename
    req.body.imagen = pathBase+nombreArchivo
    console.log(req.body.imagen)
    try {
        const resultado = await DAO.crearEstampa(req.body)
        respuestas.success(req, res, resultado, 200)
    } catch (error) {
        respuestas.error(req, res, error.message, 500)
    }
}

module.exports = {
    obtenerEstampaPorId,
    obtenerEstampasPorArtista,
    obtenerEstampasPorClasificacion,
    crearEstampa
}