import { Types } from "mongoose";
import { UserModel } from "../entity/models/user.models";
import { IGetUserByUid } from "../entity/types/user.types";

export const getUserByUidService = async(uid:string| Types.ObjectId) => {
  try {
    if (!uid) throw new Error("Invalid user uid");
    console.log(uid);
    return await UserModel.findOne({uid: uid});
  } catch (error: any) {
    throw new Error(`Error retrieving user data: ${error.message}`);
  }
}