import { createUserService } from "../services/createUser.services";
import { NextFunction, Request, Response } from "express";
import { ISignUpClient, ISignUpPsychologist, ISignUpUser } from "../../user/entity/types/user.types";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createClientService } from "../services/createClient.services";
import { createPsychologistService } from "../services/createPsychologist.services";

export const createUser =async (req:Request<{},{},ISignUpUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const createClient =async (req:Request<{},{},ISignUpClient>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {email, password, profile} = req.body;
    const user = await createUserService({email, password});
    const {_id} = user;
    const client = await createClientService({user_id:_id,profile});
    res.status(201).json({ success: true, data: client });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const createPsychologist =async (req:Request<{},{},ISignUpPsychologist>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {email, password, profile} = req.body;
    const user = await createUserService({email, password});
    const {_id} = user;
    const psychologist = await createPsychologistService({user_id:_id,profile});
    res.status(201).json({ success: true, data: psychologist });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}