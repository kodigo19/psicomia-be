"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPreference_controllers_1 = require("../controllers/createPreference.controllers");
const express_1 = require("express");
const createPayment_controllers_1 = require("../controllers/createPayment.controllers");
const router = (0, express_1.Router)();
router.post('/checkout', createPreference_controllers_1.createPreference);
router.post('/create_payment', createPayment_controllers_1.createPayment);
exports.default = router;
