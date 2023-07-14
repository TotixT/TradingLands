import dineros from "../models/Dinero.js";

const getDinero = async (req, res)=>{
    const dinero = await dineros.find();
    res.json(dinero);
};

const postDinero = async (req, res)=>{
    const dinero = new dineros(req.body);
    try {
        const nuevoDinero = await dinero.save();
        res.json(nuevoDinero);
    } catch (error) {
        console.log(error);
    }
};

const deleteDinero = async (req, res)=>{
    try {
        await dineros.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este Dinero no existe"});
    }
};

const oneDinero = async (req, res)=>{
    try {
        const dinero = await dineros.findOne({_id:req.params.id});
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Este Dinero no existe"});
    }
}

const putDinero = async (req, res)=>{
    try {
        const dinero = await dineros.findOne({_id:req.params.id});
        if (req.body.TipoDinero) {
            dinero.TipoDinero = req.body.TipoDinero;
        }
        if (req.body.MetodoPago) {
            dinero.MetodoPago = req.body.MetodoPago;
        }
        if (req.body.Monto) {
            dinero.Monto = req.body.Monto;
        }
        await dinero.save();
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Este Tipo de Dinero no existe"});
    }
};


export {getDinero, postDinero, deleteDinero, oneDinero, putDinero};