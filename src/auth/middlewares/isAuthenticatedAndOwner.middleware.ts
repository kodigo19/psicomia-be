import admin from '../../config/firebase.config';
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import { UserModel } from '../../user/entity/models/user.models';

export const isAuthenticatedAndOwner = async(
  req: Request<{ user_id: string }, {}>,
  res:Response,
  next: NextFunction
) => {
    const {authorization} = req.headers;
    if (!authorization) next(new ApplicationError(403,'Unauthorized'));
    try {
      // Decoded Token and get Uid
      const decodedToken = await admin.auth().verifyIdToken(authorization!);
      const decodedUid = decodedToken.uid;

      // Look for Object Owner (get uid) based on user_id
      const objectToHandle: any = await UserModel.findById(req.params.user_id);

      // If object is not found, user does not exists
      if (!objectToHandle) {
        next(new ApplicationError(401,'User not Found'));
      }
      // If object is found, get uid
      const {uid} = objectToHandle;
      // Check if uid from object matchs with the uid from token
      if (decodedUid !== objectToHandle.uid) {
        next(new ApplicationError(403,'Unauthorized'));
      }
    } catch (error: any) {
      next(new ApplicationError(403,'Unauthorized'));
    }
    next();
}