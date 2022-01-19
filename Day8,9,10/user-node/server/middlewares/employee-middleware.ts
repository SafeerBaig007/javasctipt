const express = require("express");
const Joi = require("joi");
const router = express.Router();
const employeeJoiValidation = require("./joi-validations/joi-employee-validation");
import { Request,  Response, NextFunction} from "express";


const addEmployeeMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
      validationResult.error.details.forEach((e: any, index: number) => {
        validationErrorMessage = validationErrorMessage + e.message + ",";
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
const deleteEmployeeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};
const findAllEmployeesMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};
const findOneEmployeeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};
const updateEmployeeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};

module.exports = {
  addEmployeeMiddleware,
  deleteEmployeeMiddleware,
  findAllEmployeesMiddleware,
  findOneEmployeeMiddleware,
  updateEmployeeMiddleware,
};
