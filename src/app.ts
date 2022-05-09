import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import authRoutes from "./auth/routes/auth.routes";
import userRoutes from "./user/routes/user.routes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(userRoutes);

app.use(function(err: any, req: Request, res: Response, next: NextFunction){
  res.status(err.status ? err.status : 500).send({message: err.message, type: err.type});
});

export default app;