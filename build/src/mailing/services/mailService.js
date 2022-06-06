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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailService = void 0;
const form_data_1 = __importDefault(require("form-data"));
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const appLogger_1 = require("../../shared/logger/appLogger");
const sendMailService = (recipientData, message, attachment) => __awaiter(void 0, void 0, void 0, function* () {
    const mailgun = new mailgun_js_1.default(form_data_1.default);
    const username = 'api';
    const key = `${process.env.MAILGUN_API_KEY}`;
    const mailDomain = `${process.env.MAILGUN_DOMAIN}`;
    const mg = mailgun.client({ username, key });
    try {
        const { recipientFirstName, recipientEmail, orderNumber, billingAmount, } = recipientData;
        const data = {
            from: 'Natalia de Psicologia Mia <info@psicologiamia.pe>',
            to: recipientEmail,
            subject: `${recipientFirstName}! Tu compra fue un éxito :D`,
            text: message.text,
            inline: attachment,
            template: 'checkout_confirmation_template_psmia',
            'h:X-Mailgun-Variables': JSON.stringify({
                orderNumber,
                billingAmount,
            }),
        };
        console.log('mg data', data);
        const msg = yield mg.messages.create(mailDomain, data);
    }
    catch (error) {
        appLogger_1.logger.error(error);
        console.log('error in sendmail');
        console.log(error);
        throw new Error(`Error sending email: ${error.message}`);
    }
});
exports.sendMailService = sendMailService;
