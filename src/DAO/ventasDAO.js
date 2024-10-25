const db = require('../DB/mysql')

function obtenerVentaPorId(id){
    return db.ejecutarQuery(
        `SELECT * FROM Ventas WHERE idVenta=${id}`
    )
}

function obtenerVentasPorUsuario(cedula){
    return db.ejecutarQuery(
        `SELECT * FROM Ventas WHERE cedula=${cedula}`
    )
}

function obtenerVentasUsuarioPorEstado(cedula, estado){
    return db.ejecutarQuery(
        `SELECT * FROM Ventas WHERE cedula=${cedula} AND idEstadoVenta =${estado}`
    )
}

function crearVenta(venta){
    return db.ejecutarQuery(
        `INSERT INTO Ventas(fecha, valorTotal, cedula, idEstadoVenta) VALUES
        (${venta.fecha}, ${venta.valorTotal}, ${venta.cedula}, ${venta.idEstadoVenta})`
    )
}

module.exports = {
    obtenerVentaPorId,
    obtenerVentasPorUsuario,
    obtenerVentasUsuarioPorEstado,
    crearVenta
}