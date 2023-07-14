import { Router } from "express";

import { getDinero, postDinero, deleteDinero, oneDinero, putDinero } from '../controllers/dinero.controllers.js';

const router = Router();

router.get("/all", getDinero);

router.post("/add", postDinero);

router.delete("/del/:id", deleteDinero);

router.get("/one/:id", oneDinero);

router.put("/upd/:id", putDinero);

export default router;