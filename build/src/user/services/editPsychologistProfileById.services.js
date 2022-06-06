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
exports.editPsychologistProfileByIdService = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const psychologist_models_1 = require("../entity/models/psychologist.models");
const editPsychologistProfileByIdService = (user_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // const query = { _id: id}
    try {
        const psychologist = yield psychologist_models_1.PsychologistModel.findOne({ user_id: user_id });
        if (!psychologist) {
            throw new Error('No psychologist found');
        }
        let query = { $set: { 'profile.$': {} } };
        if (data.profile.hasOwnProperty('firstname')) {
            query.$set['profile.firstname'] = data.profile.firstname;
        }
        if (data.profile.hasOwnProperty('lastname')) {
            query.$set['profile.lastname'] = data.profile.lastname;
        }
        if (data.profile.hasOwnProperty('phoneNumber')) {
            query.$set['profile.phoneNumber'] = data.profile.phoneNumber;
        }
        if (data.profile.hasOwnProperty('nationality')) {
            query.$set['profile.nationality'] = data.profile.nationality;
        }
        if (data.profile.hasOwnProperty('country_grade')) {
            query.$set['profile.country_grade'] = data.profile.country_grade;
        }
        if (data.profile.hasOwnProperty('grade_status')) {
            query.$set['profile.grade_status'] = data.profile.grade_status;
        }
        if (data.profile.hasOwnProperty('specialization_status')) {
            query.$set['profile.specialization_status'] = data.profile.specialization_status;
        }
        if (data.profile.hasOwnProperty('experience_years')) {
            query.$set['profile.experience_years'] = data.profile.experience_years;
        }
        if (data.profile.hasOwnProperty('gender')) {
            query.$set['profile.gender'] = data.profile.gender;
        }
        if (data.profile.hasOwnProperty('referral')) {
            query.$set['profile.referral'] = data.profile.referral;
        }
        const updatedClient = yield psychologist_models_1.PsychologistModel.findOneAndUpdate({ user_id: user_id }, query, { returnDocument: 'after' });
        return updatedClient;
    }
    catch (error) {
        appLogger_1.logger.error(error);
        throw new Error(`Error editing psychologist profile: ${error.message}`);
    }
});
exports.editPsychologistProfileByIdService = editPsychologistProfileByIdService;
