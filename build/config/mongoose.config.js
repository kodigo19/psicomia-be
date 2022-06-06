"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongooseConnection = (url) => {
    mongoose_1.default.connect(url);
    mongoose_1.default.connection.on('error', () => console.log('Error on db connection'));
    mongoose_1.default.connection.once('connected', () => console.log('Db connected'));
};
exports.mongooseConnection = mongooseConnection;
