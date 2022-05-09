import { logger } from "../../shared/logger/appLogger";
import { PsychologistModel } from "../entity/models/psychologist.models";
import { IPsychologist } from "../entity/types/psychologist.types";

export const editPsychologistProfileByIdService = async (
    user_id: string,
    data: any
): Promise<IPsychologist | null> => {
    // const query = { _id: id}
    try {
      console.log('user_id');
        console.log(user_id);
        const psychologist: IPsychologist | null = await PsychologistModel.findOne({user_id:user_id});
        console.log('---psychologist---');
        console.log(psychologist);
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
            if (data.profile.emergency_contact.hasOwnProperty('social_network')) {
                query.$set['profile.referral.social_network'] = data.profile.referral.social_network;
            }
            if (data.profile.referral.hasOwnProperty('partner')) {
                query.$set['profile.referral.partner'] = data.profile.referral.partner;
            }
            if (data.profile.referral.hasOwnProperty('family')) {
                query.$set['profile.referral.family'] = data.profile.referral.family;
            }
            if (data.profile.referral.hasOwnProperty('internet_search')) {
              query.$set['profile.referral.internet_search'] = data.profile.referral.internet_search;
            }
            if (data.profile.referral.hasOwnProperty('other_referral')) {
              query.$set['profile.referral.other_referral'] = data.profile.referral.other_referral;
            }
        }
        console.log('query')
        console.log(query);
        const updatedClient = await PsychologistModel.findOneAndUpdate({user_id: user_id}, query, {returnDocument: 'after'});
        console.log(updatedClient)
        return updatedClient;
    } catch (error: any) {
        logger.error(error)
        throw new Error(`Error editing psychologist profile: ${error.message}`);
    }
}