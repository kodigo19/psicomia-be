import {Types} from "mongoose";
import { string } from "yup";

export interface ITherapy {
  _id: Types.ObjectId | string,
  name: string,
  therapy_type: string
}
