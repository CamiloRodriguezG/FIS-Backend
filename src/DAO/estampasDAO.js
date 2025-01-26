const db = require('../DB/mysql')

async function obtenerTodas() {
    const query = 'SELECT * FROM Estampas'
    return db.ejecutarQuery(query)
}

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

async function crearEstampa(estampa){
    const query = 'INSERT INTO Estampas(nombreEstampa, descripcionEstampa, precio, stock, imagen, idClasificacion, idEstadoEstampa, cedula) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const params = [estampa.nombreEstampa, estampa.descripcionEstampa, estampa.precio, estampa.stock, estampa.imagen, 1, 1, estampa.cedula]
    return db.ejecutarQuery(query, params)
}

async function modificarEstampa(estampa){
    const query = 'UPDATE Estampas SET nombreEstampa = ?, descripcionEstampa = ?, precio = ?, stock = ?, imagen = ?, idClasificacion = ?, idEstadoEstampa = ?, cedula = ? WHERE codigoEstampa = ?'
    const params = [estampa.nombreEstampa, estampa.descripcionEstampa, estampa.precio, estampa.stock, estampa.imagen, 1, 1, estampa.cedula, estampa.codigoEstampa]
    return db.ejecutarQuery(query, params)
}

module.exports = {
    obtenerTodas,
    obtenerEstampaPorId,
    obtenerEstampasPorArtista,
    obtenerEstampasPorClasificacion,
    crearEstampa,
    modificarEstampa
}