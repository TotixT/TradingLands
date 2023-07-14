import tipoDineros from "../models/TipoDinero.js";

const getTipoDinero = async (req, res)=>{
    const tipoDinero = await tipoDineros.find();
    res.json(tipoDinero);
};

const postTipoDinero = async (req, res)=>{
    const tipoDinero = new tipoDineros(req.body);
    try {
        const nuevoTipoDinero = await tipoDinero.save();
        res.json(nuevoTipoDinero);
    } catch (error) {
        console.log(error);
    }
};

const deleteTipoDinero = async (req, res)=>{
    try {
        await tipoDineros.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este Tipo de Dinero no existe"});
    }
};

const oneTipoDinero = async (req, res)=>{
    try {
        const tipoDinero = await tipoDineros.findOne({_id:req.params.id});
        res.send(tipoDinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Este Tipo de Dinero no existe"});
    }
}

const putTipoDinero = async (req, res)=>{
    try {
        const tipoDinero = await tipoDineros.findOne({_id:req.params.id});
        if (req.body.Tipo) {
            tipoDinero.Tipo = req.body.Tipo;
        }
        await tipoDinero.save();
        res.send(tipoDinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Este Tipo de Dinero no existe"});
    }
};


export {getTipoDinero, postTipoDinero, deleteTipoDinero, oneTipoDinero, putTipoDinero};