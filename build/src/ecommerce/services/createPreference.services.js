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
exports.createPreferenceService = void 0;
const mercadopago_models_1 = require("../entity/models/mercadopago.models");
const createAny_1 = require("../../shared/factory/createAny");
const mercadopago = require('mercadopago');
const createPreferenceService = (quantity, product_code, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside createPreferenceservice');
    // Cita Individual - Única Cita
    let title = '';
    let description = '';
    let unit_price = 9999999;
    let therapy_code = 'ind';
    let credits = 0;
    console.log('product_code');
    console.log(product_code);
    if (product_code === 'CIU01') {
        title = 'Cita Individual';
        description = '1 cita por videollamada de 50 min. para 1 persona';
        unit_price = 90;
        therapy_code = 'ind';
        credits = 1;
    }
    else if (product_code === 'CPU01') {
        // Cita de Pareja - Única Cita
        title = 'Cita de Pareja';
        description = '1 cita por videollamada de 50 min. para 2 persona';
        unit_price = 120;
        therapy_code = 'duo';
        credits = 1;
    }
    else if (product_code === 'CIP01') {
        // Cita Individual - Paquete 5 citas
        title = 'Paquete de Citas Individual';
        description = '5 cita por videollamada de 50 min. para 1 persona';
        unit_price = 427.50;
        therapy_code = 'ind';
        credits = 5;
    }
    else if (product_code === 'CPP01') {
        // Cita de Pareja - Paquete 5 Citas
        title = 'Paquete de Citas de Pareja';
        description = '5 cita por videollamada de 50 min. para 2 persona';
        unit_price = 570;
        therapy_code = 'duo';
        credits = 5;
    }
    else {
        throw new Error(`Invalid Product Code`);
    }
    try {
        mercadopago.configure({
            access_token: `${process.env.MP_ACCESS_TOKEN}`,
        });
        let preference = {
            items: [
                {
                    product_code,
                    title,
                    unit_price: Number(unit_price),
                    quantity: Number(quantity),
                    description,
                    user_id,
                    therapy_code,
                    credits: Number(credits),
                }
            ],
            // TODO Create Back URLS Redirect
            back_urls: {
                "success": `${process.env.CLIENT_URI}/client/checkout/redirect`,
                "failure": `${process.env.CLIENT_URI}/client/checkout/redirect`,
                "pending": `${process.env.CLIENT_URI}/client/checkout/redirect`,
            },
            auto_return: "approved",
        };
        console.log('antes de crear mpPreference');
        const mpPreference = yield mercadopago.preferences.create(preference);
        console.log('antes de crear bdPreferenceToCreate');
        const bdPreferenceToCreate = {
            product_code,
            title,
            unit_price: Number(unit_price),
            quantity: Number(quantity),
            description,
            user_id,
            preference_id: mpPreference.body.id,
            therapy_code,
            credits: Number(credits),
        };
        console.log('antes de crear bdPreference  ');
        const bdPreference = yield (0, createAny_1.createAny)(mercadopago_models_1.MercadopagoPreferenceModel)(bdPreferenceToCreate);
        return mpPreference;
    }
    catch (error) {
        console.log('error in mercadopago.preferences.create');
        throw new Error(`Error creating preference in mercadopago: ${error.message}`);
    }
});
exports.createPreferenceService = createPreferenceService;
