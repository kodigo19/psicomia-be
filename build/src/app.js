"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./user/routes/user.routes"));
const ecommerce_routes_1 = __importDefault(require("./ecommerce/routes/ecommerce.routes"));
const mailing_routes_1 = __importDefault(require("./mailing/routes/mailing.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(auth_routes_1.default);
app.use(user_routes_1.default);
app.use(ecommerce_routes_1.default);
app.use(mailing_routes_1.default);
app.use(function (err, req, res, next) {
    res.status(err.status ? err.status : 500).send({ message: err.message, type: err.type });
});
exports.default = app;
