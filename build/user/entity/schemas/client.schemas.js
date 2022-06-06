"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.ClientSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'is required']
    },
    profile: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        main_therapy_area: {
            type: String,
            required: true,
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
        },
    },
    appointment_credits: [{
            therapy_code: {
                type: String,
            },
            credits: {
                type: Number,
            }
        }],
    current_appointments: [{
            therapy_code: {
                type: String,
            },
            start_date: {
                type: Date,
            },
            end_date: {
                type: Date,
            },
            verified: {
                type: Boolean,
            },
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});
// ClientSchema.methods.toJSON = function() {
//   const { user_id, profile } = this.toObject();
//   return { user_id, profile };
// }
