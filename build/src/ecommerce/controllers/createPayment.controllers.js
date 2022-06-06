"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
const createPayment_services_1 = require("../services/createPayment.services");
const mailService_1 = require("../../mailing/services/mailService");
const getClientProfileById_services_1 = require("../../user/services/getClientProfileById.services");
const mercadopago_models_1 = require("../entity/models/mercadopago.models");
const user_models_1 = require("../../user/entity/models/user.models");
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const createTherapyCredits_services_1 = require("../services/createTherapyCredits.services");
const createPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collection_id, collection_status, payment_id, status, external_reference, payment_type, merchant_order_id, preference_id, site_id, processing_mode, merchant_account_id, user_id } = req.body;
        const mpPreference = yield mercadopago_models_1.MercadopagoPreferenceModel.findOne({ preference_id: preference_id });
        const obj_preference_id = mpPreference === null || mpPreference === void 0 ? void 0 : mpPreference._id;
        yield (0, createPayment_services_1.createPaymentService)({
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
        yield (0, createTherapyCredits_services_1.createTherapyCreditsService)({
            preference_id,
            user_id
        });
        const userProfile = yield user_models_1.UserModel.findById(user_id);
        const clientProfile = yield (0, getClientProfileById_services_1.getClientProfileByIdService)(user_id);
        const recipientFirstName = `${clientProfile === null || clientProfile === void 0 ? void 0 : clientProfile.profile.firstname} ${clientProfile === null || clientProfile === void 0 ? void 0 : clientProfile.profile.lastname}`;
        const recipientEmail = userProfile === null || userProfile === void 0 ? void 0 : userProfile.email;
        const billingAmount = mpPreference === null || mpPreference === void 0 ? void 0 : mpPreference.unit_price;
        yield (0, mailService_1.sendMailService)({
            recipientFirstName,
            recipientEmail,
            orderNumber: payment_id,
            billingAmount,
        }, {
            text: "Tu compra ha sido procesada satisfactoriamente"
        }, "");
        res.status(201).json({ status: 'success' });
    }
    catch (error) {
        console.log('createpayment error controller');
        console.log(error);
        next(new ApplicationError_1.ApplicationError(400, error.message));
    }
});
exports.createPayment = createPayment;
