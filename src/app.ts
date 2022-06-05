import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import authRoutes from "./auth/routes/auth.routes";
import userRoutes from "./user/routes/user.routes";
import ecommerceRoutes from "./ecommerce/routes/ecommerce.routes";
import mailingRoutes from "./mailing/routes/mailing.routes";

const app: Application = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(userRoutes);
app.use(ecommerceRoutes);
app.use(mailingRoutes);

app.use(function(err: any, req: Request, res: Response, next: NextFunction){
  res.status(err.status ? err.status : 500).send({message: err.message, type: err.type});
});

export default app;