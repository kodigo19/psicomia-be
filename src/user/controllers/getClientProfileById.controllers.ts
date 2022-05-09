import { NextFunction, Request, Response } from "express";
import { logger } from '../../shared/logger/appLogger';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getClientProfileByIdService } from "../services/getClientProfileById.services";

export const getClientProfileById = async(
  req:Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await getClientProfileByIdService(req.params.user_id);
    res.status(200).json({success: true, data: client});
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}