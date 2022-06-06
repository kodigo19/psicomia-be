"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const EmergencyContactSchema = new Schema({
    relationship: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    phoneNumber: {
        type: String,
        default: null,
    },
});
const ProfileSchema = new Schema({
    firstname: {
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    phoneNumber: {
        type: String,
        default: null,
    },
    birthday: {
        type: Date,
        default: null,
    },
    gender: {
        type: String,
        default: null,
    },
    marital_status: {
        type: String,
        default: null,
    },
    children: {
        type: Number,
        default: null,
    },
    ocupation: {
        type: String,
        default: null,
    },
    residence_country: {
        type: String,
        default: null,
    },
    academic_grade: {
        type: String,
        default: null,
    },
    time_zone: {
        type: String,
        default: null,
    },
    emergency_contact: {
        name: {
            type: String,
            default: null,
        },
        relationship: {
            type: String,
            default: null,
        },
        phoneNumber: {
            type: String,
            default: null,
        },
    }
});
exports.UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});
exports.UserSchema.methods.toJSON = function () {
    const { _id, uid, email, role } = this.toObject();
    return { _id, uid, email, role };
};
