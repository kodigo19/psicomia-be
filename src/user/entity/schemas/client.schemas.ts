import mongoose from "mongoose";
import { IClient } from "../types/client.types";

const Schema = mongoose.Schema;

export const ClientSchema = new Schema<IClient>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
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
    main_therapy_area:{
      type: String,
      required: true,
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
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

ClientSchema.methods.toJSON = function() {
  const { user_id, profile } = this.toObject();
  return { user_id, profile };
}