import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { IClient, ICreateClient } from "../../user/entity/types/client.types";
import { ClientModel } from "../../user/entity/models/client.models";

export const createClientService =async (userRequest:ICreateClient) => {
 try {
   // Create client in DB
  const {user_id, profile} = userRequest;
  const {firstname, lastname, main_therapy_area} = profile
  const clientToCreate = {
    user_id,
    profile: {
      firstname,
      lastname,
      main_therapy_area,
    }
  }
   const createdClient: any = await createAny(ClientModel)(clientToCreate);
   const _id = createdClient._id
   const client = await ClientModel.findOne({'_id': _id}).populate('user_id')
   return client as IClient;
 } catch (error: any) {
   throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
 } 
}