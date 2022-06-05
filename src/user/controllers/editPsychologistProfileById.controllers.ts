import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express"
import { logger } from '../../shared/logger/appLogger';
import { editPsychologistProfileByIdService } from "../services/editPsychologistProfileById.services";
import { IEditPsychologistProfile } from "../entity/types/psychologist.types";


export const editPsychologistProfileProfileById = async (
  req: Request<{ user_id: string }, {}, IEditPsychologistProfile>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedProfile = await editPsychologistProfileByIdService(req.params.user_id, req.body)
    res.status(200).json({ data: updatedProfile })
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}