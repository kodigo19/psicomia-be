import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import * as yup from "yup";
import { UserModel } from "../../user/entity/models/user.models";

export const signUpClientSchema = yup.object({
  body: yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    // password: yup
    //   .string()
    //   .min(8, 'Min length is 8')
    //   .required('Password is required.')
    //   .test("isValidPass",  'Passowrd must be 8 char (One UpperCase & One Symbol)', (value:any, context:any) => {
    //     const hasUpperCase = /[A-Z]/.test(value);
    //     const hasLowerCase = /[a-z]/.test(value);
    //     const hasNumber = /[0-9]/.test(value);
    //     const hasSymbole = /[!@#%&]/.test(value);
    //     let validConditions = 0;
    //     const numberOfMustBeValidConditions = 4;
    //     const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
    //     conditions.forEach((condition) =>
    //       condition ? validConditions++ : null
    //     );
    //     if (validConditions >= numberOfMustBeValidConditions) {
    //       return true;
    //     }
    //     return false;
    //   }),
    profile: yup.object({
      firstname: yup.string().required('Firstname is required'),
      lastname: yup.string().required('Lastname is required'),
      main_therapy_area: yup.string().required('Main Therapy Area is required'),
    })
  })
});

export const signUpPsychologistSchema = yup.object({
  body: yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    // password: yup
    //   .string()
    //   .min(8, 'Min length is 8')
    //   .required('Password is required.')
    //   .test("isValidPass",  'Passowrd must be 8 char (One UpperCase & One Symbol)', (value:any, context:any) => {
    //     const hasUpperCase = /[A-Z]/.test(value);
    //     const hasLowerCase = /[a-z]/.test(value);
    //     const hasNumber = /[0-9]/.test(value);
    //     const hasSymbole = /[!@#%&]/.test(value);
    //     let validConditions = 0;
    //     const numberOfMustBeValidConditions = 4;
    //     const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
    //     conditions.forEach((condition) =>
    //       condition ? validConditions++ : null
    //     );
    //     if (validConditions >= numberOfMustBeValidConditions) {
    //       return true;
    //     }
    //     return false;
    //   }),
    profile: yup.object({
      firstname: yup.string().required('Firstname is required'),
      lastname: yup.string().required('Lastname is required'),
      phoneNumber: yup.string().required('Phone number is required'),
      nationality: yup.string().required('Nationality is required'),
      country_grade: yup.string().required('Country grade is required'),
      grade_status: yup.string().required('Grade status is required'),
      specialization_status: yup.string().required('Specialization status is required'),
      experience_years: yup.number().required('Grade status is required'),
      referral: yup.string().required('Referral is required'),
    })
  })
});


export const authValidator = (schema: any)=>async (
  req: Request,
  _res: Response,
  next: NextFunction
  ) => {
  try {
    await schema.validate({
      body: req.body
    });
    next()
  } catch (error:any) {
    next(new ApplicationError(400,error,'validation'));
  }
}