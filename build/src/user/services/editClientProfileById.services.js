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
exports.editClientProfileByIdService = void 0;
const client_models_1 = require("../entity/models/client.models");
const appLogger_1 = require("../../shared/logger/appLogger");
const editClientProfileByIdService = (user_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // const query = { _id: id}
    try {
        const client = yield client_models_1.ClientModel.findOne({ user_id: user_id });
        if (!client) {
            throw new Error('No client found');
        }
        let query = { $set: { 'profile.$': {} } };
        if (data.profile.hasOwnProperty('firstname')) {
            query.$set['profile.firstname'] = data.profile.firstname;
        }
        if (data.profile.hasOwnProperty('lastname')) {
            query.$set['profile.lastname'] = data.profile.lastname;
        }
        if (data.profile.hasOwnProperty('main_therapy_area')) {
            query.$set['profile.main_therapy_area'] = data.profile.main_therapy_area;
        }
        if (data.profile.hasOwnProperty('phoneNumber')) {
            query.$set['profile.phoneNumber'] = data.profile.phoneNumber;
        }
        if (data.profile.hasOwnProperty('birthday')) {
            query.$set['profile.birthday'] = data.profile.birthday;
        }
        if (data.profile.hasOwnProperty('gender')) {
            query.$set['profile.gender'] = data.profile.gender;
        }
        if (data.profile.hasOwnProperty('marital_status')) {
            query.$set['profile.marital_status'] = data.profile.marital_status;
        }
        if (data.profile.hasOwnProperty('children')) {
            query.$set['profile.children'] = data.profile.children;
        }
        if (data.profile.hasOwnProperty('ocupation')) {
            query.$set['profile.ocupation'] = data.profile.ocupation;
        }
        if (data.profile.hasOwnProperty('residence_country')) {
            query.$set['profile.residence_country'] = data.profile.residence_country;
        }
        if (data.profile.hasOwnProperty('academic_grade')) {
            query.$set['profile.academic_grade'] = data.profile.academic_grade;
        }
        if (data.profile.hasOwnProperty('time_zone')) {
            query.$set['profile.time_zone'] = data.profile.time_zone;
        }
        if (data.profile.hasOwnProperty('emergency_contact')) {
            if (data.profile.emergency_contact.hasOwnProperty('relationship')) {
                query.$set['profile.emergency_contact.relationship'] = data.profile.emergency_contact.relationship;
            }
            if (data.profile.emergency_contact.hasOwnProperty('name')) {
                query.$set['profile.emergency_contact.name'] = data.profile.emergency_contact.name;
            }
            if (data.profile.emergency_contact.hasOwnProperty('phoneNumber')) {
                query.$set['profile.emergency_contact.phoneNumber'] = data.profile.emergency_contact.phoneNumber;
            }
        }
        const updatedClient = yield client_models_1.ClientModel.findOneAndUpdate({ user_id: user_id }, query, { returnDocument: 'after' });
        return updatedClient;
    }
    catch (error) {
        appLogger_1.logger.error(error);
        throw new Error(`Error editing client profile: ${error.message}`);
    }
});
exports.editClientProfileByIdService = editClientProfileByIdService;
