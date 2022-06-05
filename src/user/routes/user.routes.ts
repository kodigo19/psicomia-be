import { Router } from "express";
import { editClientProfileProfileById } from "../controllers/editClientProfileById.controllers";
import { editPsychologistProfileProfileById } from "../controllers/editPsychologistProfileById.controllers";
import { isAuthenticated } from "../../auth/middlewares/isAuthenticated.middleware";
import { getClientProfileById } from "../controllers/getClientProfileById.controllers";
import { getPsychologistProfileById } from "../controllers/getPsychologistProfileById.controllers";
import { isAuthenticatedAndOwner } from "../../auth/middlewares/isAuthenticatedAndOwner.middleware";
import { getUserByUid } from "../controllers/getUserByUid.controllers";
import { getClientProfileByUid } from "../controllers/getClientProfileByUid.controllers";
import { getUserDataByUid } from "../controllers/getUserDataByUid.controllers";

const router: Router = Router();

router.get('/users/:uid', isAuthenticated,getUserByUid);
router.get('/users/uid/:uid', isAuthenticated,getUserDataByUid);
router.get('/clients/uid/:uid', isAuthenticated,getClientProfileByUid);
router.get('/clients/:user_id',isAuthenticatedAndOwner,getClientProfileById);
router.get('/psychologists/:user_id',isAuthenticatedAndOwner,getPsychologistProfileById);
router.patch('/clients/:user_id', isAuthenticatedAndOwner, editClientProfileProfileById);
router.patch('/psychologists/:user_id', isAuthenticatedAndOwner, editPsychologistProfileProfileById);

export default router;  