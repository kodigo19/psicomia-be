import { ClientModel } from "../entity/models/client.models";

export const getClientProfileByUidService = async(uid:string): Promise<any | null> => {
  try {
    if (!uid) throw new Error("Invalid user uid");
    const client = await ClientModel.findOne({uid: uid}).populate('user_id');
    return client
  } catch (error: any) {
    throw new Error(`Error retrieving client profile: ${error.message}`);
  }
}