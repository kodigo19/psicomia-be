import {Model} from "mongoose";

export const createAny = (Model: Model<any>) => {
  return async <T>(any: T): Promise<T> => {
    const newAny = new Model(any);
    return await newAny.save();
  }
}