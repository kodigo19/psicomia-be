import { Router } from "express";
import { sendMail } from "../controllers/mailController";

const router: Router = Router()

router.post('/mailing/standard', sendMail);

export default router;