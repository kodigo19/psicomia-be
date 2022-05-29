import {Types} from "mongoose";
import { string } from "yup";

export interface IProduct {
  name: string,
  description: string,
  price: number,
  quantity: number,
  therapy_type: string,
  product_type: string,
}
