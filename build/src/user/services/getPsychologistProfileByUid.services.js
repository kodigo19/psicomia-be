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
exports.getPsychologistProfileByUidService = void 0;
const psychologist_models_1 = require("../entity/models/psychologist.models");
const getPsychologistProfileByUidService = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uid)
            throw new Error("Invalid user uid");
        console.log('user_id in getPsychologistProfileByUidService', uid);
        const psychologist = yield psychologist_models_1.PsychologistModel.findOne({ uid: uid }).populate('user_id');
        console.log('psychologist', psychologist);
        return psychologist;
    }
    catch (error) {
        throw new Error(`Error retrieving psychologist profile: ${error.message}`);
    }
});
exports.getPsychologistProfileByUidService = getPsychologistProfileByUidService;
