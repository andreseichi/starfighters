import { Request, Response } from "express";
import { getBattleResult } from "../services/battleService";
import { Users } from "../types/users";

export async function battle(req: Request, res: Response) {
  const users: Users = req.body;

  const { firstUser, secondUser } = users;

  const mensagem = await getBattleResult(firstUser, secondUser);

  return res.send(mensagem);
}
