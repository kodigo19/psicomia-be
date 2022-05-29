import { NextFunction, Request, Response } from "express";
import { logger } from '../../shared/logger/appLogger';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getUserByUidService } from "../services/getUserByUid.services";

export const getUserByUid = async(
  req:Request<{ uid: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('inside getUserByUidController');
    console.log(req.headers);
    console.log('uid');
    console.log(req.params.uid);
    const user = await getUserByUidService(req.params.uid);
    res.status(200).json({success: true, data: user});
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}