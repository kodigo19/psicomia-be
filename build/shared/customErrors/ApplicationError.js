"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(status, message, type) {
        super(message);
        this.status = status;
        this.type = type;
    }
}
exports.ApplicationError = ApplicationError;
