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
exports.createPreference = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const appLogger_1 = require("../../shared/logger/appLogger");
const createPreference_services_1 = require("../services/createPreference.services");
const createPreference = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, product_code, user_id } = req.body;
    try {
        const responsePreference = yield (0, createPreference_services_1.createPreferenceService)(quantity, product_code, user_id);
        res.status(201).json({ preference: responsePreference.body, id: responsePreference.body.id });
    }
    catch (error) {
        appLogger_1.logger.error(error);
        next(new ApplicationError_1.ApplicationError(401, `${error.message}`));
    }
});
exports.createPreference = createPreference;
