import { NextFunction, Request, Response } from "express";
import battleSchema from "../schemas/battleSchema";
import { Users } from "../types/users";

export const validateUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users: Users = req.body;

  const { error } = battleSchema.validate(users, { abortEarly: false });

  if (error) {
    const errorsMessageArray = error.details.map((error: any) => error.message);

    return res.status(422).send(errorsMessageArray);
  }

  next();
};
