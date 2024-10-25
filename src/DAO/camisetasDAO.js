const db = require('../DB/mysql')

// Funciones GET

function obtenerCamisetasPorVenta(idVenta){
    return db.ejecutarQuery(
        `SELECT * FROM Camisetas WHERE idVenta=${idVenta}`
    )
}

function obtenerCamisetasPorCodigo(codigoCamiseta){
    return db.ejecutarQuery(
        `SELECT * FROM Camisetas WHERE codigoCamiseta=${codigoCamiseta}`
    )
}

// Funciones POST

function crearCamiseta(camiseta){
    return db.ejecutarQuery(
        `INSERT INTO Camisetas(color, precio, talla, idVenta, idPosicion, idMaterial, codigoEstampa) VALUES
        ('${camiseta.color}', ${camiseta.precio}, '${camiseta.talla}', ${camiseta.idVenta}, ${camiseta.idPosicion}, ${camiseta.idMaterial}, ${camiseta.codigoEstampa})`
    )
}

module.exports = {
    obtenerCamisetasPorVenta,
    obtenerCamisetasPorCodigo,
    crearCamiseta
}