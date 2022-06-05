import { Types } from "mongoose";
import { IPsychologist } from "../entity/types/psychologist.types";
import { PsychologistModel } from "../entity/models/psychologist.models";

export const getPsychologistProfileByIdService = async(user_id:string | Types.ObjectId): Promise<IPsychologist | null> => {
  try {
    if (!user_id) throw new Error("Invalid user id");
    console.log(user_id);
    return await PsychologistModel.findOne({user_id: user_id});
  } catch (error: any) {
    throw new Error(`Error retrieving psychologist profile: ${error.message}`);
  }
}