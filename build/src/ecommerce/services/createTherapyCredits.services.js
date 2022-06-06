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
exports.createTherapyCreditsService = void 0;
const mercadopago_models_1 = require("../entity/models/mercadopago.models");
const client_models_1 = require("../../user/entity/models/client.models");
const createTherapyCreditsService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { preference_id, user_id } = params;
        //Check if user has already created credits for this therapy, else create credit
        const preference = yield mercadopago_models_1.MercadopagoPreferenceModel.findOne({ preference_id });
        // Check if preference exist    
        if (!preference)
            throw new Error(`Error preference does not exist`);
        const therapy_code = preference.therapy_code;
        const credits = preference.credits;
        // Check if user_id is valid
        const client = yield client_models_1.ClientModel.findOne({ user_id });
        let has_this_therapy_code = false;
        let current_credits = 0;
        if (client) {
            const therapy_credits_data = client.appointment_credits;
            if (therapy_credits_data.length > 0) {
                // Check if ther is appointment credit for this therapy_code
                therapy_credits_data.forEach((item) => {
                    if (item.therapy_code === therapy_code) {
                        has_this_therapy_code = true;
                        current_credits = item.credits;
                    }
                });
            }
        }
        else {
            throw new Error(`Error user does not exist`);
        }
        if (has_this_therapy_code) {
            // Update credit for therapy_code
            const updated_client = yield client_models_1.ClientModel.updateOne({ 'user_id': user_id, 'appointment_credits.therapy_code': therapy_code }, { '$set': {
                    'appointment_credits.$.therapy_code': therapy_code,
                    'appointment_credits.$.credits': current_credits + credits,
                } });
            console.log('updated_client HAS THIS THERAPY CODE', updated_client);
        }
        else {
            // Add therapy code and credits
            const appointment_credits_to_update = {
                therapy_code,
                credits,
            };
            const updated_client = yield client_models_1.ClientModel.updateOne({ 'user_id': user_id }, { '$push': { 'appointment_credits': { 'therapy_code': therapy_code, 'credits': credits } } });
        }
    }
    catch (error) {
        throw new Error(`Error in CreateTherapyCreditsService: ${error.message}`);
    }
});
exports.createTherapyCreditsService = createTherapyCreditsService;
