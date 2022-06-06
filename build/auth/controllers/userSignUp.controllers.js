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
exports.createPsychologist = exports.createClient = exports.createUser = void 0;
const createUser_services_1 = require("../services/createUser.services");
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const createClient_services_1 = require("../services/createClient.services");
const createPsychologist_services_1 = require("../services/createPsychologist.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, createUser_services_1.createUserService)(req.body);
        res.status(201).json({ success: true, data: user });
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(400, error.message));
    }
});
exports.createUser = createUser;
const createClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, profile } = req.body;
        const user = yield (0, createUser_services_1.createUserService)({ email, password, role: 2 });
        const { _id } = user;
        const client = yield (0, createClient_services_1.createClientService)({ user_id: _id, profile });
        res.status(201).json({ success: true, data: client });
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(400, error.message));
    }
});
exports.createClient = createClient;
const createPsychologist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, profile } = req.body;
        const user = yield (0, createUser_services_1.createUserService)({ email, password, role: 3 });
        const { _id } = user;
        const psychologist = yield (0, createPsychologist_services_1.createPsychologistService)({ user_id: _id, profile });
        res.status(201).json({ success: true, data: psychologist });
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(400, error.message));
    }
});
exports.createPsychologist = createPsychologist;
