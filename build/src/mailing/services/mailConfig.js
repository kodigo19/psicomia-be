"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailDomain = exports.mailConfig = void 0;
exports.mailConfig = {
    username: 'api',
    key: `${process.env.MAILGUN_API_KEY}`,
};
exports.mailDomain = {
    domain: `${process.env.MAILGUN_DOMAIN}`,
};
