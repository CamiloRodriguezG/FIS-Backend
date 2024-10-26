const respuestas = require('../res')
const bcrypt = require('bcrypt')
const DAO = require('../DAO/usuariosDAO')
const saltRounds = 5;

function obtenerTodos(req, res){
    try {
        DAO.obtenerTodos()
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

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
    usuario.contraseña = await bcrypt.hash(req.body.contraseña, saltRounds)
    try {
        DAO.crearUsuario(usuario)
        .then((msj)=>{
            respuestas.success(req, res, msj, 200)
        })
    } catch (error) {
        respuestas.error(req, res, error, 500)
    }
}

async function login(req, res){
    DAO.obtenerUsuarioPorUsername(req.body.username)
    .then((usuario) => {
        if(!usuario[0]){
            respuestas.error(req, res, "Usuario no encontrado", 400)
        }else{
            bcrypt.compare(req.body.contraseña, usuario[0].contraseña)
            .then((resultado) => {
                if(resultado){
                    respuestas.success(req, res, "Logeo correcto", 200)
                }else{
                    respuestas.error(req, res, "Contraseña incorrecta", 400)
                }
            })
        }
    })
}

module.exports = {
    obtenerTodos,
    obtenerUsuario,
    crearUsuario,
    login
}