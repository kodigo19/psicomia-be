"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = exports.signUpPsychologistSchema = exports.signUpClientSchema = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const yup = __importStar(require("yup"));
exports.signUpClientSchema = yup.object({
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
exports.signUpPsychologistSchema = yup.object({
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
const authValidator = (schema) => (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validate({
            body: req.body
        });
        next();
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(400, error, 'validation'));
    }
});
exports.authValidator = authValidator;
