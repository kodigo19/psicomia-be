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
exports.getUserByUidService = void 0;
const user_models_1 = require("../entity/models/user.models");
const getUserByUidService = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uid)
            throw new Error("Invalid user uid");
        console.log(uid);
        return yield user_models_1.UserModel.findOne({ uid: uid });
    }
    catch (error) {
        throw new Error(`Error retrieving user data: ${error.message}`);
    }
});
exports.getUserByUidService = getUserByUidService;
