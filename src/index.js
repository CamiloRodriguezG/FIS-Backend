const app = require('./app')

app.listen(app.get("port"), () =>{
    console.log("App servida en puerto ", app.get("port"))
})

