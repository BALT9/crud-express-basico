const express = require("express");
const rutas = require("./routes/index");
const setupSwagger = require("./swagger");

const PORT = 4000;
const app = express();

// habilitar json(body)
app.use(express.json());

// habilitar rutas
app.use("/api", rutas);

// habilitar documentación Swagger
setupSwagger(app);

// levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}/`);
    console.log(`Documentación en http://localhost:${PORT}/api-docs`);
});
