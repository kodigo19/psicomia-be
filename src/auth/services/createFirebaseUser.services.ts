import admin from '../../config/firebase.config';
import { ICreatedUser, IUser } from "user/entity/types/user.types";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const createFirebaseUser = async (email: string, password: string): Promise<ICreatedUser> => {
  try {
    const user: any = await admin.auth().createUser({
      email: email,
      emailVerified: false,
      // phoneNumber: '+11234567890',
      password: password,
      // displayName: 'John Doe',
      // photoURL: 'http://www.example.com/12345678/photo.png',
      // disabled: false,
    })
    const createdUser: ICreatedUser = {
      email: user.email!,
      uid: user.uid,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      disabled: user.disabled
    }
    return createdUser;
  } catch (error: any) {
   throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
  }
}