import traders from "../models/Traders.js";

const getTrader = async (req, res)=>{
    const trader = await traders.find();
    res.json(trader);
};

const postTrader = async (req, res)=>{
    const trader = new traders(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader);
    } catch (error) {
        console.log(error);
    }
};

const deleteTrader = async (req, res)=>{
    try {
        await traders.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este Trader no existe"});
    }
};

const oneTrader = async (req, res)=>{
    try {
        const trader = await traders.findOne({_id:req.params.id});
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta Trader no existe"});
    }
}

const putTrader = async (req, res)=>{
    try {
        const trader = await traders.findOne({_id:req.params.id});

        if (req.body.Nombre) {
            trader.Nombre = req.body.Nombre;
        }
        if (req.body.Edad) {
            trader.Edad = req.body.Edad;
        }
        if (req.body.Nacionalidad) {
            trader.Nacionalidad = req.body.Nacionalidad;
        }
        if (req.body.Presupuesto) {
            trader.Presupuesto = req.body.Presupuesto;
        }
        await trader.save();
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta Accion no existe"});
    }
};


export {getTrader, postTrader, deleteTrader, oneTrader, putTrader};