import { Types } from "mongoose";
import { IClient } from "../entity/types/client.types";
import { ClientModel } from "../entity/models/client.models";

export const getClientProfileByIdService = async(user_id:string | Types.ObjectId): Promise<any | null> => {
  try {
    if (!user_id) throw new Error("Invalid user id");
    const client = await ClientModel.findOne({user_id: user_id}).populate('user_id');
    return client;
  } catch (error: any) {
    throw new Error(`Error retrieving client profile: ${error.message}`);
  }
}