import { Types } from "mongoose";

export interface IPsychologist {
  _id: Types.ObjectId,
  user_id: string | Types.ObjectId;
  profile: {
    firstname: string,
    lastname:string,
    phoneNumber: string,
    nationality: string,
    country_grade: string,
    grade_status: string,
    gender: string | undefined,
    specialization_status: string,
    experience_years: number,
    referral: {
      social_network: boolean,
      partner: boolean,
      family: boolean,
      internet_search: boolean,
      other_referral:boolean,
    }
    created_at: Date;
    updated_at: Date;
  }
}

export type ICreatePsychologist =Omit<IPsychologist, '_id' | 'profile'> & {
  profile: Omit<IPsychologist['profile'], 'gender' | 'created_at' | 'updated_at'>
}

export type IEditPsychologistProfile = Omit<IPsychologist, 'user_id'>  & {
  profile: Omit<IPsychologist['profile'], 'created_at' | 'updated_at'>
};