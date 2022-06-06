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
exports.createFirebaseUser = void 0;
const firebase_config_1 = __importDefault(require("../../config/firebase.config"));
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const createFirebaseUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield firebase_config_1.default.auth().createUser({
            email: email,
            emailVerified: false,
            // phoneNumber: '+11234567890',
            password: password,
            // displayName: 'John Doe',
            // photoURL: 'http://www.example.com/12345678/photo.png',
            // disabled: false,
        });
        const createdUser = {
            email: user.email,
            uid: user.uid,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            disabled: user.disabled
        };
        return createdUser;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
    }
});
exports.createFirebaseUser = createFirebaseUser;
