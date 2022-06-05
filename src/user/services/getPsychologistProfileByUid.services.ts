import { PsychologistModel } from "../entity/models/psychologist.models";

export const getPsychologistProfileByUidService = async(uid:string): Promise<any | null> => {
  try {
    if (!uid) throw new Error("Invalid user uid");
    console.log('user_id in getPsychologistProfileByUidService',uid);
    const psychologist = await PsychologistModel.findOne({uid: uid}).populate('user_id');
    console.log('psychologist', psychologist);
    return psychologist;
  } catch (error: any) {
    throw new Error(`Error retrieving psychologist profile: ${error.message}`);
  }
}