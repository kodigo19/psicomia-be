"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychologistModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const psychologist_schemas_1 = require("../schemas/psychologist.schemas");
exports.PsychologistModel = mongoose_1.default.model('Psychologist', psychologist_schemas_1.PsychologistSchema);
