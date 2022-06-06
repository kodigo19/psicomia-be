"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const client_schemas_1 = require("../schemas/client.schemas");
exports.ClientModel = mongoose_1.default.model('Client', client_schemas_1.ClientSchema);
