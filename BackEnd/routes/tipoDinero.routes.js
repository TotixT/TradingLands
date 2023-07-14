import { Router } from "express";

import { getTipoDinero, postTipoDinero, deleteTipoDinero, oneTipoDinero, putTipoDinero } from '../controllers/tipoDinero.controllers.js';

const router = Router();

router.get("/all", getTipoDinero);

router.post("/add", postTipoDinero);

router.delete("/del/:id", deleteTipoDinero);

router.get("/one/:id", oneTipoDinero);

router.put("/upd/:id", putTipoDinero);

export default router;