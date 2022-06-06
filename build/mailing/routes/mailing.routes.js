"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mailController_1 = require("../controllers/mailController");
const router = (0, express_1.Router)();
router.post('/mailing/standard', mailController_1.sendMail);
exports.default = router;
