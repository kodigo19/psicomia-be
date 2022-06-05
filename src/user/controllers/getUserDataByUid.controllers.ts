import { NextFunction, Request, Response } from "express";
import { logger } from '../../shared/logger/appLogger';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getUserDataByUidService } from "../services/getUserDataByUid.services";

export const getUserDataByUid = async(
  req:Request<{ uid: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await getUserDataByUidService(req.params.uid);
    res.status(200).json({success: true, data: userData});
  } catch (error:any) {
    logger.error(error)
    console.log('error in getClientProfileByUid', error);
    next(new ApplicationError(401, `${error.message}`));
  }
}