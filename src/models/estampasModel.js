const respuestas = require('../res')
const DAO = require('../DAO/estampasDAO')

function obtenerEstampaPorId(req, res){
    try {
        DAO.obtenerEstampaPorId(req.params.idEstampa)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })   
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerEstampasPorArtista(req, res){
    try {
        DAO.obtenerEstampasPorArtista(req.params.cedula)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerEstampasPorClasificacion(req, res){
    try {
        DAO.obtenerEstampasPorClasificacion(req.params.idClasificacion)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function crearEstampa(req, res){
    try {
        DAO.crearEstampa(req.body)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

module.exports = {
    obtenerEstampaPorId,
    obtenerEstampasPorArtista,
    obtenerEstampasPorClasificacion,
    crearEstampa
}