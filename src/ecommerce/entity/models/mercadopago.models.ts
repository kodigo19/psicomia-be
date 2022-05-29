import { model } from 'mongoose';
import { MercadopagoPaymentSchema, MercadopagoPreferenceSchema } from '../schemas/mercadopago.schemas';
import { IMercadopagoPayment, IMercadopagoPreference } from '../types/mercadopago.types';

export const MercadopagoPreferenceModel = model<IMercadopagoPreference>('MercadopagoPreference',MercadopagoPreferenceSchema);
export const MercadopagoPaymentModel = model<IMercadopagoPayment>('MercadopagoPayment',MercadopagoPaymentSchema);