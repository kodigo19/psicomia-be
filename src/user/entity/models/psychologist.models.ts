import mongoose from "mongoose";
import { PsychologistSchema } from "../schemas/psychologist.schemas";
import { IPsychologist } from "../types/psychologist.types";

export const PsychologistModel = mongoose.model<IPsychologist>('Psychologist', PsychologistSchema);