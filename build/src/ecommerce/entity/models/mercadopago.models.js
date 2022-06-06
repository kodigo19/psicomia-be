"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadopagoPaymentModel = exports.MercadopagoPreferenceModel = void 0;
const mongoose_1 = require("mongoose");
const mercadopago_schemas_1 = require("../schemas/mercadopago.schemas");
exports.MercadopagoPreferenceModel = (0, mongoose_1.model)('MercadopagoPreference', mercadopago_schemas_1.MercadopagoPreferenceSchema);
exports.MercadopagoPaymentModel = (0, mongoose_1.model)('MercadopagoPayment', mercadopago_schemas_1.MercadopagoPaymentSchema);
