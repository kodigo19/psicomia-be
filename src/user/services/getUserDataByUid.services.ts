import { ClientModel } from "../entity/models/client.models";
import { PsychologistModel } from "../entity/models/psychologist.models";
import { UserModel } from "../entity/models/user.models";

export const getUserDataByUidService = async(uid:string): Promise<any | null> => {
  try {
    if (!uid) throw new Error("Invalid user uid");
    console.log('user_id in getPsychologistProfileByUidService',uid);
    const user = await UserModel.findOne({uid:uid})
    if (!user) throw new Error("Invalid user");
    const role = user.role;
    if (role === 2) {
      const client = await ClientModel.findOne({uid: uid}).populate('user_id');  
      if (!client) throw new Error("Invalid client");
      console.log('Client Profile');
      return client;
    }
    if (role === 3) {
      const psychologist = await PsychologistModel.findOne({uid: uid}).populate('user_id');
      if (!psychologist) throw new Error("Invalid psychologist");
      console.log('Psychologist Profile');
      return psychologist;
    }
  } catch (error: any) {
    throw new Error(`Error retrieving user profile: ${error.message}`);
  }
}