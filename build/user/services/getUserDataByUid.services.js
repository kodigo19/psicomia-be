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
exports.getUserDataByUidService = void 0;
const client_models_1 = require("../entity/models/client.models");
const psychologist_models_1 = require("../entity/models/psychologist.models");
const user_models_1 = require("../entity/models/user.models");
const getUserDataByUidService = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uid)
            throw new Error("Invalid user uid");
        console.log('user_id in getPsychologistProfileByUidService', uid);
        const user = yield user_models_1.UserModel.findOne({ uid: uid });
        if (!user)
            throw new Error("Invalid user");
        const role = user.role;
        if (role === 2) {
            const client = yield client_models_1.ClientModel.findOne({ uid: uid }).populate('user_id');
            if (!client)
                throw new Error("Invalid client");
            console.log('Client Profile');
            return client;
        }
        if (role === 3) {
            const psychologist = yield psychologist_models_1.PsychologistModel.findOne({ uid: uid }).populate('user_id');
            if (!psychologist)
                throw new Error("Invalid psychologist");
            console.log('Psychologist Profile');
            return psychologist;
        }
    }
    catch (error) {
        throw new Error(`Error retrieving user profile: ${error.message}`);
    }
});
exports.getUserDataByUidService = getUserDataByUidService;
