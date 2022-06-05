import { Schema } from 'mongoose';
import { IMercadopagoPayment, IMercadopagoPreference } from '../types/mercadopago.types';

export const MercadopagoPreferenceSchema = new Schema<IMercadopagoPreference>({
  product_code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unit_price: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true,
  },
  preference_id: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  therapy_code: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  },
});

export const MercadopagoPaymentSchema = new Schema<IMercadopagoPayment>({
  collection_id: {
    type: String,
    required: true,
  },
  collection_status: {
    type: String,
    required: true,
  },
  payment_id: {
    type:String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  external_reference: {
    type: String,
  },
  payment_type: {
    type: String,
    required:true,
  },
  merchant_order_id: {
    type: String,
    required:true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  preference_id: {
    type: Schema.Types.ObjectId,
    ref: 'MercadopagoPreference',
  },
  site_id: {
    type: String,
    required:true,
  },
  processing_mode: {
    type: String,
    required:true,
  },
  merchant_account_id: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updatet_at',
  },
});
