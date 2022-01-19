"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeModal = require('../models').employee;
const addEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('body', req.body);
        yield employeeModal.create({
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
        return res.status(201).send({ success: true, message: 'Department add successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server ERROR' });
    }
});
module.exports = {
    addEmployee
};
