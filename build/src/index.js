"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_config_1 = require("./config/mongoose.config");
(0, mongoose_config_1.mongooseConnection)(`${process.env.MONGO_URI}`);
app_1.default.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
