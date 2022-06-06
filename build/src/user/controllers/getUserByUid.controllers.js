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
exports.getUserByUid = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const getUserByUid_services_1 = require("../services/getUserByUid.services");
const getUserByUid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, getUserByUid_services_1.getUserByUidService)(req.params.uid);
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        appLogger_1.logger.error(error);
        next(new ApplicationError_1.ApplicationError(401, `${error.message}`));
    }
});
exports.getUserByUid = getUserByUid;
