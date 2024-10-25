const respuestas = require('../res')
const bcryp = require('bcrypt')
const DAO = require('../DAO/usuariosDAO')
const saltRounds = 5;

function obtenerUsuario(req, res){
    try {
        DAO.obtenerUsuario(req.params.cedula)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

async function crearUsuario(req, res){
    usuario = req.body
    usuario.contraseña = await bcryp.hash(req.body.contraseña, saltRounds)
    try {
        DAO.crearUsuario(usuario)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

module.exports = {
    obtenerUsuario,
    crearUsuario
}