import { createPreference } from "../controllers/createPreference.controllers";
import { Router } from "express";
import { createPayment } from "../controllers/createPayment.controllers";

const router: Router = Router();

router.post('/checkout',createPreference);
router.post('/create_payment',createPayment);

export default router;  