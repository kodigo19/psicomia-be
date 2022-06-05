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
      referral
    }
  }
   const createdPsychologist:any = await createAny(PsychologistModel)(psychologistToCreate);
   const _id = createdPsychologist._id
   const psychologist = await PsychologistModel.findOne({'_id': _id}).populate('user_id');
   return psychologist as IPsychologist;
 } catch (error: any) {
   throw new ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
 } 
}