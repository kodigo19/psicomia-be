import mongoose from "mongoose";
import { createAny } from "../../shared/factory/createAny";
import { MercadopagoPaymentModel, MercadopagoPreferenceModel } from "../entity/models/mercadopago.models";
import { ICreateMercadopagoPayment } from "../entity/types/mercadopago.types";

export const createPaymentService = async (paymentRequest: ICreateMercadopagoPayment): Promise<void> => {
  try {
    console.log('createPaymentService');
    console.log(paymentRequest);
    await createAny(MercadopagoPaymentModel)(paymentRequest);
  } catch (error: any) {
    console.log('error createPaymentService');
    console.log(error);
    throw new Error(`Error payment: ${error.message}`);
  }
}