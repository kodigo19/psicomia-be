import { Types } from "mongoose";
import { ClientModel } from "../entity/models/client.models";

export const getClientProfileByIdService = async(user_id:string | Types.ObjectId) => {
  try {
    if (!user_id) throw new Error("Invalid user id");
    console.log(user_id);
    return await ClientModel.findOne({user_id: user_id});
  } catch (error: any) {
    throw new Error(`Error retrieving client profile: ${error.message}`);
  }
}