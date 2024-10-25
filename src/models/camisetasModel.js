const respuestas = require('../res')
const DAO = require('../DAO/camisetasDAO')

function obtenerCamisetasPorVenta(req, res){
    try {
        DAO.obtenerCamisetasPorVenta(req.params.idVenta)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })     
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerCamisetasPorCodigo(req, res){
    try {
        DAO.obtenerCamisetasPorCodigo(req.params.codigo)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })  
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function crearCamiseta(req, res){
    try {
        DAO.crearCamiseta(req.body)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })   
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

module.exports = {
    obtenerCamisetasPorVenta,
    obtenerCamisetasPorCodigo,
    crearCamiseta
}