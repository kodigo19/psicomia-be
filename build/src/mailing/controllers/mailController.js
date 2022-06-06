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
exports.sendMail = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const appLogger_1 = require("../../shared/logger/appLogger");
const mailService_1 = require("../services/mailService");
const sendMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipientData, message, attachment } = req.body;
    try {
        yield (0, mailService_1.sendMailService)(recipientData, message, attachment);
        res.json({ message: `Email enviado con éxito a ${recipientData.recipientEmail}` });
        next();
    }
    catch (error) {
        appLogger_1.logger.error(error);
        next(new ApplicationError_1.ApplicationError(400, `Error mailing: ${error.message}`));
    }
});
exports.sendMail = sendMail;
