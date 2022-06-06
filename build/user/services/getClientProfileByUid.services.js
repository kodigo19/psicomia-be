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
exports.getClientProfileByUidService = void 0;
const client_models_1 = require("../entity/models/client.models");
const getClientProfileByUidService = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uid)
            throw new Error("Invalid user uid");
        const client = yield client_models_1.ClientModel.findOne({ uid: uid }).populate('user_id');
        return client;
    }
    catch (error) {
        throw new Error(`Error retrieving client profile: ${error.message}`);
    }
});
exports.getClientProfileByUidService = getClientProfileByUidService;
