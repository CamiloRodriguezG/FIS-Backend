const db = require('../DB/mysql')

function obtenerTodos(){
    return db.ejecutarQuery(
        `SELECT * FROM Usuarios`
    )
}

function obtenerUsuario(cedula){
    return db.ejecutarQuery(
        `SELECT * FROM Usuarios 
        WHERE cedula=${cedula}`
    )
}

function obtenerUsuarioPorUsername(username){
    return db.ejecutarQuery(
        `SELECT * FROM Usuarios 
        WHERE username='${username}'`
    )
}

function crearUsuario(usuario){
    return db.ejecutarQuery(`
        INSERT INTO Usuarios(cedula, nombre, username, contraseña, direccion, telefono, idRol) VALUES
        (${usuario.cedula}, '${usuario.nombre}', '${usuario.username}', '${usuario.contraseña}', '${usuario.direccion}', ${usuario.telefono}, ${usuario.idRol})
    `)
}

module.exports = {
    obtenerTodos,
    obtenerUsuario,
    obtenerUsuarioPorUsername,
    crearUsuario
}