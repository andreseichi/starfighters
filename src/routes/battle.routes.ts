import { Router } from "express";
import { battle } from "../controllers/battleController";
import { validateUsers } from "../middlewares/usersMiddleware";

const battleRouter = Router();

battleRouter.post("/battle", validateUsers, battle);

export { battleRouter };
