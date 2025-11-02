const express = require("express");

const productoController = require("./../controllers/producto.controller");

// importa las rutas 
const Route = express.Router();

Route.get("/producto", productoController.funListar);
Route.post("/producto", productoController.funGuardar);
Route.get("/producto/:id", productoController.funMostrar);
Route.put("/producto/:id", productoController.funModificar);
Route.delete("/producto/:id", productoController.funEliminar);

// exportar las rutas
module.exports = Route;

