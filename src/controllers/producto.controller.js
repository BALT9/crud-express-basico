// importacion del modelo producto 
const Producto = require("./../models/producto");

async function funListar(req, res) {
    try {
        const productos = await Producto.findAll();
        return res.json(productos);
    } catch (error) {
        console.log(error);
    }
    // return res.json({
    //     "mensaje": "listando producto"
    // });
}

function funGuardar(req, res) {


    // return res.json({
    //     "mensaje": "guardando producto"
    // });
}

function funMostrar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    return res.json({
        "mensaje": `mostrando producto con id: ${id}`
    });
}

function funModificar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    return res.json({
        "mensaje": `modificando producto con id: ${id}`
    });
}

function funEliminar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    return res.json({
        "mensaje": `eliminando producto con id: ${id}`
    });
}

// exporta los controladores 
module.exports = {
    funListar,
    funGuardar,
    funMostrar,
    funModificar,
    funEliminar
}