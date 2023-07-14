import express from "express";
import cors from "cors";
import tipoDineroRoutes from '../routes/tipoDinero.routes.js';
// import dineroRoutes from '../routes/dinero.routes.js';
// import accionesRoutes from '../routes/accion.routes.js';
// import traderRoutes from '../routes/trader.routes.js';

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.tipoDineroPath = "/api/tipoDinero";
        this.dineroPath = "/api/dinero";
        this.accionesPath = "/api/acciones";
        this.traderPath = "/api/traders";
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.tipoDineroPath,tipoDineroRoutes);
        // this.app.use(this.dineroPath,dineroRoutes);
        // this.app.use(this.accionesPath,accionesRoutes);
        // this.app.use(this.traderPath,traderRoutes);
    }

    listening(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

export default Server;