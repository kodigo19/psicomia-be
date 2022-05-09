import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express"
import { logger } from '../../shared/logger/appLogger';
import { editClientProfileByIdService } from "../services/editClientProfileById.services"
import { IEditClientProfile } from "../entity/types/client.types";


export const editClientProfileProfileById = async (
  req: Request<{ user_id: string }, {}, IEditClientProfile>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedProfile = await editClientProfileByIdService(req.params.user_id, req.body)
    console.log(req.body);
    console.log(updatedProfile);
    res.status(200).json({ data: updatedProfile })
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}