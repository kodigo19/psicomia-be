import { logger } from "../../shared/logger/appLogger";
import { PsychologistModel } from "../entity/models/psychologist.models";
import { IPsychologist } from "../entity/types/psychologist.types";

export const editPsychologistProfileByIdService = async (
    user_id: string,
    data: any
): Promise<IPsychologist | null> => {
    // const query = { _id: id}
    try {
        const psychologist: IPsychologist | null = await PsychologistModel.findOne({user_id:user_id});
        if (!psychologist) {
            throw new Error('No psychologist found');
        }

        let query: {[key:string] : number | string | object | any} = {$set: {'profile.$':{}}};
        if (data.profile.hasOwnProperty('firstname')) {
            query.$set['profile.firstname'] = data.profile.firstname;
        }
        if (data.profile.hasOwnProperty('lastname')) {
            query.$set['profile.lastname'] = data.profile.lastname;
        }
        if (data.profile.hasOwnProperty('phoneNumber')) {
            query.$set['profile.phoneNumber'] = data.profile.phoneNumber;
        }
        if (data.profile.hasOwnProperty('nationality')) {
            query.$set['profile.nationality'] = data.profile.nationality;
        }
        if (data.profile.hasOwnProperty('country_grade')) {
            query.$set['profile.country_grade'] = data.profile.country_grade;
        }
        if (data.profile.hasOwnProperty('grade_status')) {
            query.$set['profile.grade_status'] = data.profile.grade_status;
        }
        if (data.profile.hasOwnProperty('specialization_status')) {
            query.$set['profile.specialization_status'] = data.profile.specialization_status;
        }
        if (data.profile.hasOwnProperty('experience_years')) {
            query.$set['profile.experience_years'] = data.profile.experience_years;
        }
        if (data.profile.hasOwnProperty('gender')) {
          query.$set['profile.gender'] = data.profile.gender;
      }
        if (data.profile.hasOwnProperty('referral')) {
            query.$set['profile.referral'] = data.profile.referral;
        }
        const updatedClient = await PsychologistModel.findOneAndUpdate({user_id: user_id}, query, {returnDocument: 'after'});
        return updatedClient;
    } catch (error: any) {
        logger.error(error)
        throw new Error(`Error editing psychologist profile: ${error.message}`);
    }
}