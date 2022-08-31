import { Router } from "express";

import { battleRouter } from "./battle.routes";

const router = Router();

router.use(battleRouter);

export default router;
