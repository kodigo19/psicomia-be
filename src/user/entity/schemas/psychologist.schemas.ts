import mongoose, { Types } from "mongoose";
import { UserModel } from "../models/user.models";
import { IPsychologist } from "../types/psychologist.types";

const Schema = mongoose.Schema;

export const PsychologistSchema = new Schema<IPsychologist>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
    referral: {
      type: String,
      required: true,
    },
  },
  current_appointments: [{
    therapy_code: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    verified: {
      type: Boolean,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

// PsychologistSchema.methods.toJSON = async function() {
//   const { user_id, profile } = this.toObject();
//   return { user_id, profile };

// }