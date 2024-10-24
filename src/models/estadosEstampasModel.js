const respuestas = require('../res')
const DAO = require('../DAO/estadosEstampasDAO')

function obtenerTodos(req, res){
    DAO.obtenerEstados()
    .then((msj)=>{
        respuestas.success(req, res, msj, 200)
    })
}

function obtenerPorId(req, res){
    DAO.obtenerPorId(req.params.id)
    .then((msj)=>{
        respuestas.success(req, res, msj, 200)
    })
}

module.exports = {
    obtenerTodos,
    obtenerPorId
}