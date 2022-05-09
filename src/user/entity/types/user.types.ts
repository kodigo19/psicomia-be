import {Types} from "mongoose";
import { string } from "yup";

export interface IUser {
  _id: Types.ObjectId | string,
  email: string,
  uid: string,
  created_at: Date,
  updated_at: Date,
  profile: IProfile,
}

export type IEmergencyContact = {
  relationship: string | undefined,
  name: string | undefined,
  phoneNumber: string | undefined,
}

export type IProfile = {
  firstname: string | undefined,
  lastname:string | undefined,
  phoneNumber: string | undefined,
  birthday: Date | undefined,
  gender: string | undefined,
  marital_status: string | undefined,
  children: number | undefined,
  ocupation: string | undefined,
  residence_country: string | undefined,
  academic_grade: string | undefined,
  time_zone: string | undefined,
  emergency_contact: {
    relationship: string | undefined,
    name: string | undefined,
    phoneNumber: string | undefined,
  },
}

export type UserIdType = {
  _id: Types.ObjectId | string,
}

export type ISignUpUser = {
  email: string,
  password: string,
}

export type ISignUpClient = {
  email: string,
  password: string,
  profile:{
    firstname: string,
    lastname:string,
    main_therapy_area: string,
  }
}
export type ISignUpPsychologist = {
  email: string,
  password: string,
  profile: {
    firstname: string,
    lastname:string,
    phoneNumber: string,
    nationality: string,
    gender: string | undefined,
    country_grade: string,
    grade_status: string,
    specialization_status: string,
    experience_years: number,
    referral: {
      social_network: boolean,
      partner: boolean,
      family: boolean,
      internet_search: boolean,
      other_referral:boolean,
    }
  }
}

export type ISignInUser = {
  email: string,
  password: string,
}

export type ICreatedUser = {
  email: string,
  uid: string,
  emailVerified: boolean,
  displayName: string | undefined,
  photoURL: string | undefined,
  phoneNumber: string | undefined,
  disabled: boolean,
}

export type EditProfile = Omit<IUser, 'id' | 'uid' | 'email' | 'created_at' | 'updated_at'>;