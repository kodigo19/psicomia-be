import { Router } from "express";
import { editClientProfileProfileById } from "../controllers/editClientProfileById.controllers";
import { editPsychologistProfileProfileById } from "../controllers/editPsychologistProfileById.controllers";
import { isAuthenticated } from "../../auth/middlewares/isAuthenticated.middleware";
import { getClientProfileById } from "../controllers/getClientProfileById.controllers";
import { getPsychologistProfileById } from "../controllers/getPsychologistProfileById.controllers";
import { isAuthenticatedAndOwner } from "../../auth/middlewares/isAuthenticatedAndOwner.middleware";

const router: Router = Router();

router.get('/clients/:user_id',isAuthenticatedAndOwner,getClientProfileById);
router.get('/psychologists/:user_id',isAuthenticatedAndOwner,getPsychologistProfileById);
router.patch('/clients/:user_id', isAuthenticatedAndOwner, editClientProfileProfileById);
router.patch('/psychologists/:user_id', isAuthenticatedAndOwner, editPsychologistProfileProfileById);

export default router;  