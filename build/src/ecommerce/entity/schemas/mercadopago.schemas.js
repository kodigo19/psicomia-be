"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadopagoPaymentSchema = exports.MercadopagoPreferenceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MercadopagoPreferenceSchema = new mongoose_1.Schema({
    product_code: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    preference_id: {
        type: String,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    therapy_code: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updatet_at',
    },
});
exports.MercadopagoPaymentSchema = new mongoose_1.Schema({
    collection_id: {
        type: String,
        required: true,
    },
    collection_status: {
        type: String,
        required: true,
    },
    payment_id: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    external_reference: {
        type: String,
    },
    payment_type: {
        type: String,
        required: true,
    },
    merchant_order_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    preference_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'MercadopagoPreference',
    },
    site_id: {
        type: String,
        required: true,
    },
    processing_mode: {
        type: String,
        required: true,
    },
    merchant_account_id: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updatet_at',
    },
});
