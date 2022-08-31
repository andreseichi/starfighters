import { Request, Response } from "express";
import { getBattleResult, registerBattle } from "../services/battleService";
import { Users } from "../types/users";

export async function battle(req: Request, res: Response) {
  const users: Users = req.body;

  const { firstUser, secondUser } = users;

  const battleResult = await getBattleResult(firstUser, secondUser);

  const response = await registerBattle(battleResult, firstUser, secondUser);

  console.log(response);

  return res.send(battleResult);
}
