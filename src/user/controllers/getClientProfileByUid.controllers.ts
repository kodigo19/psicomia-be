import { NextFunction, Request, Response } from "express";
import { logger } from '../../shared/logger/appLogger';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getClientProfileByUidService } from "../services/getClientProfileByUid.services";

export const getClientProfileByUid = async(
  req:Request<{ uid: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = await getClientProfileByUidService(req.params.uid);
    res.status(200).json({success: true, data: client});
  } catch (error:any) {
    logger.error(error)
    console.log('error in getClientProfileByUid', error);
    next(new ApplicationError(401, `${error.message}`));
  }
}