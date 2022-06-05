import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { logger } from '../../shared/logger/appLogger';
import { sendMailService } from '../services/mailService';

export const sendMail = async (req: Request, res: Response, next: NextFunction) => {
  const { recipientData, message, attachment } = req.body;
  try {
    await sendMailService(recipientData, message, attachment);
    res.json({message: `Email enviado con éxito a ${ recipientData.recipientEmail}`});
    next();
  } catch (error: any) {
    logger.error(error)
    next(new ApplicationError(400, `Error mailing: ${error.message}`));
  }
}