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
    referral: string,
    created_at: Date,
    updated_at: Date,
  },
  current_appointments: [{
    therapy_code: string,
    start_date: Date;
    end_date: Date;
    verified: Boolean,
    psychologist_id: string | Types.ObjectId,
  }]
}

export type ICreatePsychologist =Omit<IPsychologist, '_id' | 'profile' | 'current_appointments'> & {
  profile: Omit<IPsychologist['profile'], 'gender' | 'created_at' | 'updated_at'>
}

export type IEditPsychologistProfile = Omit<IPsychologist, 'user_id'>  & {
  profile: Omit<IPsychologist['profile'], 'created_at' | 'updated_at'>
};