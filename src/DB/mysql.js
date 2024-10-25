const mysql = require('mysql2')
const config = require('../config')

const dbconfig = config.mysql

let conexion

function conexionDB(){
    console.log('conectando a DB')
    conexion = mysql.createConnection(dbconfig)
    
    conexion.connect((err) => {
        if(err){
            console.log(err)
            setTimeout(conexionDB, 1000)
        }else{
            console.log('Conexion a DB exitosa')
        }
    })

    conexion.on('error', err => {
        console.log(err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conexionDB()
        }else{
            throw err
        }
    })
}

conexionDB()

function ejecutarQuery(query){
    return new Promise((resolve, reject)=>{
        conexion.query(query, (error, result)=>{
            return error ? reject(error) : resolve(result)
        })
    })
}

module.exports = {ejecutarQuery}