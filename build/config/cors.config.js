"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whiteList = ["http://localhost:3000"];
const corsConfig = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
exports.default = corsConfig;
