const db = require('../DB/mysql')

async function obtenerEstampaPorId(codigoEstampa){
    const query = 'SELECT * FROM Estampas WHERE codigoEstampa = ?'
    const params = [codigoEstampa]
    return db.ejecutarQuery(query, params)
}

async function obtenerEstampasPorArtista(cedula){
    const query = 'SELECT * FROM Estampas WHERE cedula = ?'
    const params = [cedula]
    return db.ejecutarQuery(query, params)
}

async function obtenerEstampasPorClasificacion(idClasificacion){
    const query = 'SELECT * FROM Estampas WHERE idClasificacion = ?'
    const params = [idClasificacion]
    return db.ejecutarQuery(query, params)
}

function crearEstampa(estampa){
    const query = 'INSERT INTO Estampas(nombreEstampa, descripcionEstampa, precio, stock, imagen, idClasificacion, idEstadoEstampa, cedula) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const params = [estampa.nombreEstampa, estampa.descripcionEstampa, estampa.precio, estampa.stock, estampa.imagen, estampa.idClasificacion, estampa.idEstadoEstampa, estampa.cedula]
    return db.ejecutarQuery(query, params)
}

module.exports = {
    obtenerEstampaPorId,
    obtenerEstampasPorArtista,
    obtenerEstampasPorClasificacion,
    crearEstampa
}