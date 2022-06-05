import mongoose from "mongoose";
import { IEmergencyContact, IProfile, IUser } from "../types/user.types";

const Schema = mongoose.Schema;

const EmergencyContactSchema = new Schema<IEmergencyContact>({
  relationship: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
})

const ProfileSchema = new Schema<IProfile>({
  firstname: {
    type: String,
    default: null,
  },
  lastname:{
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  birthday: {
    type: Date,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  marital_status: {
    type: String,
    default: null,
  },
  children: {
    type: Number,
    default: null,
  },
  ocupation: {
    type: String,
    default: null,
  },
  residence_country: {
    type: String,
    default: null,
  },
  academic_grade: {
    type: String,
    default: null,
  },
  time_zone: {
    type: String,
    default: null,
  },
  emergency_contact:{
    name: {
      type: String,
      default: null,
    },
    relationship: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
  }
})

export const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  uid: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: Number,
    required: true
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

UserSchema.methods.toJSON = function() {
  const { _id, uid, email, role } = this.toObject();
  return { _id, uid, email, role };
}