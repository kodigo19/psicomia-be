import admin from '../../config/firebase.config';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = async(
  req:Request,
  res:Response,
  next: NextFunction
) => {
    const {authorization} = req.headers;
    if (!authorization) next(new ApplicationError(403,'Unauthorized'));
    try {
      await admin.auth().verifyIdToken(authorization!)
    } catch (error: any) {
      console.log('error');
      console.log(error);
      next(new ApplicationError(403,'Unauthorized'));
    }
    next();
}