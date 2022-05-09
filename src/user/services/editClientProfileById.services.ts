import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { ClientModel } from "../entity/models/client.models";
import { IClient } from "../entity/types/client.types";
import { logger } from "../../shared/logger/appLogger";

export const editClientProfileByIdService = async (
    user_id: string,
    data: any
): Promise<IClient | null> => {
    // const query = { _id: id}
    try {
        console.log('user_id');
        console.log(user_id);
        const client: IClient | null = await ClientModel.findOne({user_id:user_id});
        console.log('---client---');
        console.log(client);
        if (!client) {
            throw new Error('No client found');
        }

        let query: {[key:string] : number | string | object | any} = {$set: {'profile.$':{}}};
        if (data.profile.hasOwnProperty('firstname')) {
            query.$set['profile.firstname'] = data.profile.firstname;
        }
        if (data.profile.hasOwnProperty('lastname')) {
            query.$set['profile.lastname'] = data.profile.lastname;
        }
        if (data.profile.hasOwnProperty('main_therapy_area')) {
            query.$set['profile.main_therapy_area'] = data.profile.main_therapy_area;
        }
        if (data.profile.hasOwnProperty('phoneNumber')) {
            query.$set['profile.phoneNumber'] = data.profile.phoneNumber;
        }
        if (data.profile.hasOwnProperty('birthday')) {
            query.$set['profile.birthday'] = data.profile.birthday;
        }
        if (data.profile.hasOwnProperty('gender')) {
            query.$set['profile.gender'] = data.profile.gender;
        }
        if (data.profile.hasOwnProperty('marital_status')) {
            query.$set['profile.marital_status'] = data.profile.marital_status;
        }
        if (data.profile.hasOwnProperty('children')) {
            query.$set['profile.children'] = data.profile.children;
        }
        if (data.profile.hasOwnProperty('ocupation')) {
            query.$set['profile.ocupation'] = data.profile.ocupation;
        }
        if (data.profile.hasOwnProperty('residence_country')) {
            query.$set['profile.residence_country'] = data.profile.residence_country;
        }
        if (data.profile.hasOwnProperty('academic_grade')) {
            query.$set['profile.academic_grade'] = data.profile.academic_grade;
        }
        if (data.profile.hasOwnProperty('time_zone')) {
            query.$set['profile.time_zone'] = data.profile.time_zone;
        }
        if (data.profile.hasOwnProperty('emergency_contact')) {
            if (data.profile.emergency_contact.hasOwnProperty('relationship')) {
                query.$set['profile.emergency_contact.relationship'] = data.profile.emergency_contact.relationship;
            }
            if (data.profile.emergency_contact.hasOwnProperty('name')) {
                query.$set['profile.emergency_contact.name'] = data.profile.emergency_contact.name;
            }
            if (data.profile.emergency_contact.hasOwnProperty('phoneNumber')) {
                query.$set['profile.emergency_contact.phoneNumber'] = data.profile.emergency_contact.phoneNumber;
            }
        }
        console.log('query')
        console.log(query);
        const updatedClient = await ClientModel.findOneAndUpdate({user_id: user_id}, query, {returnDocument: 'after'});
        console.log(updatedClient)
        return updatedClient;
    } catch (error: any) {
        logger.error(error)
        throw new Error(`Error editing client profile: ${error.message}`);
    }
}