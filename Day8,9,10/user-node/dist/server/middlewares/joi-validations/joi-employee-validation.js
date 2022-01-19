"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Joi = require('joi');
const joi_1 = __importDefault(require("joi"));
const addEmployeeValidation = joi_1.default.object({
    first_name: joi_1.default.string().regex(/^[a-zA-Z]+$/).min(3).max(10).required(),
    last_name: joi_1.default.string().regex(/^[a-zA-Z]+$/).min(3).max(10).required(),
    dob: joi_1.default.date().required(),
    sex: joi_1.default.boolean().required(),
    address: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
    skill: joi_1.default.string().required(),
    salary: joi_1.default.number().required(),
    dept_number: joi_1.default.number()
});
module.exports = {
    addEmployeeValidation
};
