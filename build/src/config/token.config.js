"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const tokenConfig = {
    secret: `${process.env.TOKEN_SECRET}`,
    expires: `${process.env.TOKEN_EXPIRES}`,
    refresh_secret: `${process.env.TOKEN_REFRESH_SECRET}`,
    refresh_expires: `${process.env.TOKEN_REFRESH_EXPIRES}`,
};
exports.default = tokenConfig;
