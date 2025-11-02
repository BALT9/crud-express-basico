//importar express (modulos de terceros)
const express = require("express");

//importamos rutas
const rutas = require("./routes/index");

//variables
const PORT = 4000;

//creamos la app
const app = express();

//habilitar json(body)
app.use(express.json());

// habilitar rutas
app.use("/api",rutas);

// levantar el servidor 
app.listen(PORT, ()=>{
    console.log("servidor levantado en el puerto http://localhost:4000/");
})