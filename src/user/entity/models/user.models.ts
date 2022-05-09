import mongoose from "mongoose";
import { UserSchema } from "../schemas/user.schemas";
import { IUser } from "../types/user.types";

export const UserModel = mongoose.model<IUser>('User', UserSchema);