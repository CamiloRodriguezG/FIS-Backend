const db = require('../DB/mysql')

// Funciones GET

function obtenerEstampaPorId(codigoEstampa){
    return db.ejecutarQuery(
        `SELECT * FROM Estampa WHERE codigoEstampa=${codigoEstampa}`
    )
}

function obtenerEstampasPorArtista(cedula){
    return db.ejecutarQuery(
        `SELECT * FROM Estampas WHERE cedula=${cedula}`
    )
}

function obtenerEstampasPorClasificacion(idClasificacion){
    return db.ejecutarQuery(
        `SELECT * FROM Estampas WHERE idClasificacion=${idClasificacion}`
    )
}

// Funciones POST

function crearEstampa(estampa){
    return db.ejecutarQuery(
        `INSERT INTO Estampas(nombreEstampa, descripcionEstampa, precio, stock, imagen, idClasificacion, idEstadoEstampa, cedula) VALUES
        ('${estampa.nombreEstampa}', '${estampa.descripcionEstampa}', ${estampa.precio}, ${estampa.stock}, '${estampa.imagen}', ${estampa.idClasificacion}, ${estampa.idEstadoEstampa}, ${estampa.cedula})`
    )
}

module.exports = {
    obtenerEstampaPorId,
    obtenerEstampasPorArtista,
    obtenerEstampasPorClasificacion,
    crearEstampa
}