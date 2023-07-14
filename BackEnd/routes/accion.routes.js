import { Router } from 'express';

import { getAccion, postAccion, deleteAccion, oneAccion, putAccion } from '../controllers/accion.controllers.js';

const router = Router();

router.get("/all", getAccion);

router.post("/add", postAccion);

router.delete("/del/:id", deleteAccion);

router.get("/one/:id", oneAccion);

router.put("/upd/:id", putAccion);

export default router;