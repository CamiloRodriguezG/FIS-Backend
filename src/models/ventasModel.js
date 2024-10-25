const respuestas = require('../res')
const DAO = require('../DAO/ventasDAO')

function obtenerVentaPorId(req, res){
    try {
        DAO.obtenerVentaPorId(req.params.idVenta)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerVentasPorUsuario(req, res){
    try {
        DAO.obtenerVentasPorUsuario(req.params.cedula)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function obtenerVentasUsuarioPorEstado(req, res){
    try {
        DAO.obtenerVentasUsuarioPorEstado(req.body.cedula, req.body.estado)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

function crearVenta(req, res){
    try {
        DAO.crearVenta(req.body)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

module.exports = {
    obtenerVentaPorId,
    obtenerVentasPorUsuario,
    obtenerVentasUsuarioPorEstado,
    crearVenta
}