import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express"
import { logger } from '../../shared/logger/appLogger';
import { createPreferenceService } from "../services/createPreference.services";


export const createPreference = async (
  req:Request<{},{},any>,
  res: Response,
  next: NextFunction,
) => {
  const {quantity, product_code,user_id} = req.body;
  try {
    const responsePreference = await createPreferenceService(quantity,product_code,user_id);
    res.status(201).json({ preference: responsePreference.body, id: responsePreference.body.id });
  } catch (error:any) {
    logger.error(error)
    next(new ApplicationError(401, `${error.message}`));
  }
}