import { ICreateMercadopagoPayment } from "../entity/types/mercadopago.types";
import { NextFunction, Request, Response } from "express";
import { createPaymentService } from "../services/createPayment.services";
import { sendMailService } from "../../mailing/services/mailService";
import { getClientProfileByIdService } from "../../user/services/getClientProfileById.services";
import { MercadopagoPreferenceModel } from "../entity/models/mercadopago.models";
import { UserModel } from "../../user/entity/models/user.models";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { Types } from "mongoose";

export const createPayment = async(
  req: Request<{},{},ICreateMercadopagoPayment>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('createPayment')
    const {
      collection_id, collection_status, payment_id,
      status, external_reference, payment_type,
      merchant_order_id, preference_id, site_id,
      processing_mode, merchant_account_id, user_id
    } = req.body

    
    const mpPreference = await MercadopagoPreferenceModel.findOne({preference_id:preference_id});
    console.log('mpPreference', mpPreference);
    const obj_preference_id = mpPreference?._id;

    await createPaymentService({
      collection_id,
      collection_status,
      payment_id,
      status,
      external_reference,
      payment_type,
      merchant_order_id,
      preference_id: obj_preference_id,
      site_id,
      processing_mode,
      merchant_account_id,
      user_id,
    });

    const userProfile = await UserModel.findById(user_id);
    const clientProfile = await getClientProfileByIdService(user_id);

    const recipientFirstName = `${clientProfile?.profile.firstname} ${clientProfile?.profile.lastname}`;
    const recipientEmail = userProfile?.email;

    const billingAmount = mpPreference?.unit_price;

    await sendMailService({
      recipientFirstName,
      recipientEmail,
      orderNumber: payment_id,
      billingAmount,
    },{
      text  : "Tu compra ha sido procesada satisfactoriamente"
    },"",);
    res.status(201).json({ status: 'success' });

  } catch (error: any) {
    console.log('createpayment error controller');
    console.log(error);
    next(new ApplicationError(400, error.message));
  }
}