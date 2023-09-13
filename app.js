const express = require('express');
const app = express();
const path = require("path");

const PORT=process.env.PORT || 3001;

app.use(express.static("public"))

app.get("/",function (req, res) {
    
    res.sendFile(path.join(__dirname,"views","index.html"))
    
})


app.get("/views/register",function (req, res) {
    
    res.sendFile(path.join(__dirname,"views","register.html"))
    
})

app.get("/views/login",function (req, res) {
    
    res.sendFile(path.join(__dirname,"views","login.html"))
    
})

app.get("/views/pruebaheader",function (req, res) {
    
    res.sendFile(path.join(__dirname,"views","pruebaheader.html"))
    
})


// app.get("/prueba", function(req, res){
//     res.send("soy prueba")
    
// })

app.listen (PORT,() => console.log(`Servidor escuchando en puerto ${PORT}`))