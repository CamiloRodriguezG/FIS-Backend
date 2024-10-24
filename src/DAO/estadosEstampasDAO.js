const db = require('../DB/mysql')

function obtenerEstados(){
    return db.ejecutarQuery('SELECT * FROM EstadosEstampas')
}

function obtenerPorId(id){
    return db.ejecutarQuery(`SELECT * FROM EstadosEstampas where idEstadoEstampa=${id}`)
}

module.exports = {
    obtenerEstados,
    obtenerPorId
}