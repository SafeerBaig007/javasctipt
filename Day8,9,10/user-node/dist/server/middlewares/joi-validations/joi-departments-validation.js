"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Joi = require("joi");
const joi_1 = __importDefault(require("joi"));
const addDepartmentValidation = joi_1.default.object({
    dept_name: joi_1.default.string()
        .regex(/^[a-zA-Z]+$/)
        .min(3)
        .max(10)
        .required(),
    address: joi_1.default.string().alphanum().required(),
});
const findDepartmentValidation = joi_1.default.object({
    dept_number: joi_1.default.number().integer().required(),
});
const departmentSchemaValidation = joi_1.default.object({
    dept_number: joi_1.default.number().integer().required(),
});
module.exports = {
    addDepartmentValidation,
    findDepartmentValidation,
    departmentSchemaValidation,
};
