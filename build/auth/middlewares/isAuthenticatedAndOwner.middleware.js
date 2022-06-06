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
exports.isAuthenticatedAndOwner = void 0;
const firebase_config_1 = __importDefault(require("../../config/firebase.config"));
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const user_models_1 = require("../../user/entity/models/user.models");
const isAuthenticatedAndOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization)
        next(new ApplicationError_1.ApplicationError(403, 'Unauthorized'));
    try {
        // Decoded Token and get Uid
        const decodedToken = yield firebase_config_1.default.auth().verifyIdToken(authorization);
        const decodedUid = decodedToken.uid;
        // Look for Object Owner (get uid) based on user_id
        const objectToHandle = yield user_models_1.UserModel.findById(req.params.user_id);
        // If object is not found, user does not exists
        if (!objectToHandle) {
            next(new ApplicationError_1.ApplicationError(401, 'User not Found'));
        }
        // If object is found, get uid
        const { uid } = objectToHandle;
        // Check if uid from object matchs with the uid from token
        if (decodedUid !== objectToHandle.uid) {
            next(new ApplicationError_1.ApplicationError(403, 'Unauthorized'));
        }
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(403, 'Unauthorized'));
    }
    next();
});
exports.isAuthenticatedAndOwner = isAuthenticatedAndOwner;
