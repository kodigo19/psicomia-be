import { NextFunction, Request, Response } from "express";
import { logger } from '../../shared/logger/appLogger';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getPsychologistProfileByIdService } from "../services/getPsychologistById.services";

export const getPsychologistProfileById = async(
  req:Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const psychologist = await getPsychologistProfileByIdService(req.params.user_id);
    res.status(200).json({success: true, data: psychologist});
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}