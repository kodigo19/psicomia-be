import { Types } from "mongoose";

export interface IClient {
  _id: Types.ObjectId,
  user_id: string | Types.ObjectId;
  profile: {
    firstname: string,
    lastname:string,
    main_therapy_area: string,
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
    created_at: Date;
    updated_at: Date;
  }
  appointment_credits: [{
    therapy_code: string,
    credits: number,
  }],
  current_appointments: [{
    therapy_code: string,
    start_date: Date;
    end_date: Date;
    verified: Boolean,
    psychologist_id: string | Types.ObjectId,
  }]
}

export type ICreateClient =Omit<IClient, '_id' | 'profile' | 'appointment_credits' | 'current_appointments'> & {
  profile: Omit<IClient['profile'], 'phoneNumber' | 'birthday' | 'gender' | 'marital_status' | 'children' | 'ocupation' | 'residence_country' | 'academic_grade' | 'time_zone' | 'emergency_contact' | 'created_at' | 'updated_at'>
}

export type IEditClientProfile = Omit<IClient, 'user_id'>  & {
  profile: Omit<IClient['profile'], 'created_at' | 'updated_at'>
};



export interface IClientProfile extends IClient {
  email: string;
}