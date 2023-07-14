import { Router } from 'express';

import { getTrader, postTrader, deleteTrader, oneTrader, putTrader } from '../controllers/trader.controllers.js';

const router = Router();

router.get("/all", getTrader);

router.post("/add", postTrader);

router.delete("/del/:id", deleteTrader);

router.get("/one/:id", oneTrader);

router.put("/upd/:id", putTrader);

export default router;