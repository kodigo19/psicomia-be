import { createClient, createPsychologist, createUser } from "../controllers/userSignUp.controllers";
// import { reqLoginUserValidator, reqUserValidator, signInUserSchema, signUpClientSchema } from "../middlewares/reqUserValidator.middleware";
import { Router } from "express";
import { authValidator, signUpClientSchema, signUpPsychologistSchema } from "../middlewares/authValidator.middleware";
// import { loginUser } from "../controllers/userSignIn.controllers";

const router: Router = Router();

router.post('/client/signup', authValidator(signUpClientSchema), createClient);
router.post('/psychologist/signup', authValidator(signUpPsychologistSchema), createPsychologist);

export default router;