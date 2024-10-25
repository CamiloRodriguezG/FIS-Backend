const respuestas = require('../res')
const DAO = require('../DAO/estadosEstampasDAO')

function obtenerTodos(req, res){
    try {
        DAO.obtenerEstados()
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerPorId(req, res){
    try {
        DAO.obtenerPorId(req.params.id)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId
}