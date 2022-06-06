"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editClientProfileById_controllers_1 = require("../controllers/editClientProfileById.controllers");
const editPsychologistProfileById_controllers_1 = require("../controllers/editPsychologistProfileById.controllers");
const isAuthenticated_middleware_1 = require("../../auth/middlewares/isAuthenticated.middleware");
const getClientProfileById_controllers_1 = require("../controllers/getClientProfileById.controllers");
const getPsychologistProfileById_controllers_1 = require("../controllers/getPsychologistProfileById.controllers");
const isAuthenticatedAndOwner_middleware_1 = require("../../auth/middlewares/isAuthenticatedAndOwner.middleware");
const getUserByUid_controllers_1 = require("../controllers/getUserByUid.controllers");
const getClientProfileByUid_controllers_1 = require("../controllers/getClientProfileByUid.controllers");
const getUserDataByUid_controllers_1 = require("../controllers/getUserDataByUid.controllers");
const router = (0, express_1.Router)();
router.get('/users/:uid', isAuthenticated_middleware_1.isAuthenticated, getUserByUid_controllers_1.getUserByUid);
router.get('/users/uid/:uid', isAuthenticated_middleware_1.isAuthenticated, getUserDataByUid_controllers_1.getUserDataByUid);
router.get('/clients/uid/:uid', isAuthenticated_middleware_1.isAuthenticated, getClientProfileByUid_controllers_1.getClientProfileByUid);
router.get('/clients/:user_id', isAuthenticatedAndOwner_middleware_1.isAuthenticatedAndOwner, getClientProfileById_controllers_1.getClientProfileById);
router.get('/psychologists/:user_id', isAuthenticatedAndOwner_middleware_1.isAuthenticatedAndOwner, getPsychologistProfileById_controllers_1.getPsychologistProfileById);
router.patch('/clients/:user_id', isAuthenticatedAndOwner_middleware_1.isAuthenticatedAndOwner, editClientProfileById_controllers_1.editClientProfileProfileById);
router.patch('/psychologists/:user_id', isAuthenticatedAndOwner_middleware_1.isAuthenticatedAndOwner, editPsychologistProfileById_controllers_1.editPsychologistProfileProfileById);
exports.default = router;