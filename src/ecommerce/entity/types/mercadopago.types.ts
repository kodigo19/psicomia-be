import {Schema, Types} from "mongoose";

export interface IMercadoPagoPreference {
  product_id: string | Types.ObjectId,
  unit_price: number,
  quantity: number,
  created_at: Date,
  updated_at: Date,
}