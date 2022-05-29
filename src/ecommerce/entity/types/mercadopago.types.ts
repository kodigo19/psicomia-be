import {Schema, Types} from "mongoose";

export interface IMercadopagoPreference {
  product_code: string,
  unit_price: number,
  quantity: number,
  description: string,
  preference_id: string | undefined,
  created_at: Date,
  updated_at: Date,
  user_id: string | Types.ObjectId,
}

export interface IMercadopagoPayment {
  collection_id: string,
  collection_status: string,
  payment_id: string,
  status: string,
  external_reference: string | undefined | null,
  payment_type: string,
  merchant_order_id: string,
  preference_id: string | Types.ObjectId | undefined,
  site_id: string,
  processing_mode: string,
  merchant_account_id: string | undefined | null,
  created_at: Date,
  updated_at: Date,
  user_id: string | Types.ObjectId,
}

export type ICreateMercadopagoPreference = Omit<IMercadopagoPreference, 'created_at' | 'updated_at' | 'preference_id' | 'product_id'>;

export interface ICreateMercadopagoPayment {
  collection_id: string,
  collection_status: string,
  payment_id: string,
  status: string,
  external_reference: string | undefined | null,
  payment_type: string,
  merchant_order_id: string,
  preference_id: string | Types.ObjectId | undefined,
  site_id: string,
  processing_mode: string,
  merchant_account_id: string | undefined | null,
  user_id: string | Types.ObjectId,
}