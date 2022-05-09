import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { UserModel } from "../../user/entity/models/user.models";
import { ISignUpUser, IUser } from "user/entity/types/user.types";
import { createFirebaseUser } from "./createFirebaseUser.services";

export const createUserService =async (userRequest:ISignUpUser) => {
 try {
   // Create user in firebase
  const {email, password} = userRequest;
  const firebaseUser = await createFirebaseUser(email, password);
  const userToCreate = {
    email: firebaseUser.email,
    uid:firebaseUser.uid,
  }
   const user = await createAny(UserModel)(userToCreate);
   return user as IUser;
 } catch (error: any) {
   console.log('---error en Create UserService');
   throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
 } 
}