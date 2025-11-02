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

async function funGuardar(req, res) {
    // console.log(req.body);
    try {
        const datos = req.body;
        const nuevoProducto = await Producto.create(datos);

        return res.status(201).json({
            "mensaje": "producto guardado",
            "producto": nuevoProducto,
        });
    } catch (error) {
        console.log(error);
    }
}

async function funMostrar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    const producto = await Producto.findByPk(id);

    if(!producto){
        return res.status(404).json({"mensaje":"Producto no encontrado"})
    }

    return res.json({
        "mensaje": `mostrando producto con id: ${id}`,
        "producto": producto
    });
}

async function funModificar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    const producto = await Producto.findByPk(id);

    if(!producto){
        return res.status(404).json({"mensaje":"Producto no encontrado"})
    }

    const newProducto = await producto.update(req.body);

    return res.json({
        "mensaje": `producto modificado con id: ${id}`,
        "producto": newProducto
    });
}

async function funEliminar(req, res) {
    const id = req.params.id; //aquí obtienes el id de la URL

    const producto = await Producto.findByPk(id);

    if(!producto){
        return res.status(404).json({"mensaje":"Producto no encontrado"})
    }

    await producto.destroy();

    return res.json({
        "mensaje": `producto eliminando con id: ${id}`,
        "producto": producto
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