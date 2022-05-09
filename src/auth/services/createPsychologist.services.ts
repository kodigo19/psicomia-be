import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createAny } from "../../shared/factory/createAny";
import { ICreatePsychologist, IPsychologist } from "../../user/entity/types/psychologist.types";
import { PsychologistModel } from "../../user/entity/models/psychologist.models";

export const createPsychologistService =async (userRequest:ICreatePsychologist) => {
 try {
   // Create client in DB
  const {user_id, profile} = userRequest;
  const {
    firstname, lastname, phoneNumber,
    nationality, country_grade, grade_status,
    specialization_status, experience_years, referral
  } = profile;
  const {
    social_network, partner, family, internet_search, other_referral
  } = referral;
  const psychologistToCreate = {
    user_id,
    profile:{
      firstname,
      lastname,
      phoneNumber,
      nationality,
      country_grade,
      grade_status,
      specialization_status,
      experience_years,
      referral: {
        social_network,
        partner,
        family,
        internet_search,
        other_referral
      }
    }
  }
   const psychologist = await createAny(PsychologistModel)(psychologistToCreate);
   return psychologist as IPsychologist;
 } catch (error: any) {
   console.log('---error en Create Psychologist Service');
   throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
 } 
}