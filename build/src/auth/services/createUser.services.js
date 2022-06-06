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
exports.createUserService = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const createAny_1 = require("../../shared/factory/createAny");
const user_models_1 = require("../../user/entity/models/user.models");
const createFirebaseUser_services_1 = require("./createFirebaseUser.services");
const createUserService = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create user in firebase
        const { email, password, role } = userRequest;
        const firebaseUser = yield (0, createFirebaseUser_services_1.createFirebaseUser)(email, password);
        const userToCreate = {
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            role,
        };
        const user = yield (0, createAny_1.createAny)(user_models_1.UserModel)(userToCreate);
        return user;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(403, error.message, error.code === 11000 ? 'Db error' : '');
    }
});
exports.createUserService = createUserService;
