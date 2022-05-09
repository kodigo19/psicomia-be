import mongoose from "mongoose";
import { ClientSchema } from "../schemas/client.schemas";
import { IClient } from "../types/client.types";

export const ClientModel = mongoose.model<IClient>('Client', ClientSchema);