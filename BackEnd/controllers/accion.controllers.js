import acciones from "../models/Acciones.js";

const getAccion = async (req, res)=>{
    const accion = await acciones.find();
    res.json(accion);
};

const postAccion = async (req, res)=>{
    const accion = new acciones(req.body);
    try {
        const nuevaAccion = await accion.save();
        res.json(nuevaAccion);
    } catch (error) {
        console.log(error);
    }
};

const deleteAccion = async (req, res)=>{
    try {
        await acciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Esta Accion no existe"});
    }
};

const oneAccion = async (req, res)=>{
    try {
        const accion = await acciones.findOne({_id:req.params.id});
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta Accion no existe"});
    }
}

const putAccion = async (req, res)=>{
    try {
        const accion = await acciones.findOne({_id:req.params.id});

        if (req.body.NombreAccion) {
            accion.NombreAccion = req.body.NombreAccion;
        }
        if (req.body.MetodoPago) {
            accion.MetodoPago = req.body.MetodoPago;
        }
        if (req.body.Precio) {
            accion.Precio = req.body.Precio;
        }
        if (req.body.Cantidad) {
            accion.Cantidad = req.body.Cantidad;
        }
        await accion.save();
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta Accion no existe"});
    }
};


export {getAccion, postAccion, deleteAccion, oneAccion, putAccion};