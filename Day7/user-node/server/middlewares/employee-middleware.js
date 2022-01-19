const express = require("express");
const Joi = require("joi");
const router = express.Router();
const employeeJoiValidation = require("./joi-validations/joi-employee-validation");

const addEmployeeMiddleware = (req, res, next) => {
  try {
    const validationResult = employeeJoiValidation.addEmployeeValidation.validate({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      sex: req.body.sex,
      address: req.body.address,
      title: req.body.title,
      skill: req.body.skill,
      salary: req.body.salary,
      dept_number: req.body.dept_number,
    });
    if (!validationResult.error) {
      next();
    } else {
      let validationErrorMessage = "";
      validationResult.error.details.forEach((error, index) => {
        validationErrorMessage = validationErrorMessage + error.message + ",";
      });
      return res.status(400).json({ error: validationErrorMessage });
    }
  } catch (error) {
      console.log(error)
    return res.status(500).json({
      error: { code: "UNKNOWN_ERROR", message: "An unknown error occurred." },
    });
  }
};
const deleteEmployeeMiddleware = (req, res, next) => {
  next();
};
const findAllEmployeesMiddleware = (req, res, next) => {
  next();
};
const findOneEmployeeMiddleware = (req, res, next) => {
  next();
};
const updateEmployeeMiddleware = (req, res, next) => {
  next();
};

module.exports = {
  addEmployeeMiddleware,
  deleteEmployeeMiddleware,
  findAllEmployeesMiddleware,
  findOneEmployeeMiddleware,
  updateEmployeeMiddleware,
};
