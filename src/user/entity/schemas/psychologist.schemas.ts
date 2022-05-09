import mongoose from "mongoose";
import { UserModel } from "../models/user.models";
import { IPsychologist } from "../types/psychologist.types";

const Schema = mongoose.Schema;

export const PsychologistSchema = new Schema<IPsychologist>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Psychologist',
    required: [true, 'is required']
  },
  profile: {
    firstname: {
      type: String,
      required: true,
    },
    lastname:{
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: null,
    },
    country_grade: {
      type: String,
      required: true,
    },
    grade_status: {
      type: String,
      required: true,
    },
    specialization_status: {
      type: String,
      required: true,
    },
    experience_years: {
      type: Number,
      required: true,
    },
    referral:{
      social_network: {
        type: String,
        required: true,
      },
      partner: {
        type: String,
        required: true,
      },
      family: {
        type: String,
        required: true,
      },
      internet_search: {
        type: String,
        required: true,
      },
      other_referral: {
        type: String,
        required: true,
      },
    }
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

PsychologistSchema.methods.toJSON = async function() {
  const { user_id, profile } = this.toObject();
  return { user_id, profile };

}