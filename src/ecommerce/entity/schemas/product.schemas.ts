import mongoose from "mongoose";
import { IProduct } from "../types/product.types";

const Schema = mongoose.Schema;

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  therapy_type: {
    type: String,
    enum: ['individual', 'couple'],
    required: true,
  },
  product_type: {
    type: String,
    enum: ['one', 'package'],
    required: true,
  },
})