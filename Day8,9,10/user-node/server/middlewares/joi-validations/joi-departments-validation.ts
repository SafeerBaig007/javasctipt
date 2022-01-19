// const Joi = require("joi");
import Joi from "joi";
const addDepartmentValidation = Joi.object({
  dept_name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(3)
    .max(10)
    .required(),
  address: Joi.string().alphanum().required(),
});

const findDepartmentValidation = Joi.object({
  dept_number: Joi.number().integer().required(),
});

const departmentSchemaValidation = Joi.object({
  dept_number: Joi.number().integer().required(),
});
module.exports = {
  addDepartmentValidation,
  findDepartmentValidation,
  departmentSchemaValidation,
};
