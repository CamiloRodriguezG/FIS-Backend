const db = require('../DB/mysql')

function obtenerUsuario(cedula){
    return db.ejecutarQuery(
        `SELECT * FROM Usuarios 
        WHERE cedula=${cedula}`
    )
}

function crearUsuario(usuario){
    return db.ejecutarQuery(`
        INSERT INTO Usuarios(cedula, nombre, username, contraseña, direccion, telefono, idRol) VALUES
        (${usuario.cedula}, '${usuario.nombre}', '${usuario.username}', '${usuario.contraseña}', '${usuario.direccion}', ${usuario.telefono}, ${usuario.idRol})
    `)
}

module.exports = {
    obtenerUsuario,
    crearUsuario
}