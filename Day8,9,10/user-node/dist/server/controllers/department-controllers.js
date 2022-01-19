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
// const express = require('express')
let process = require("process");
let _path = process.cwd();
const department = require(_path + '/server/models').departments;
const employee = require(_path + "/server/models").employee;
const addDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield department.create({ dept_name: req.body.dept_name, address: req.body.address });
        return res.status(201).send({ success: true, message: 'Department add successfully' });
    }
    catch (error) {
        return res.status(500).send({ success: false, message: 'Internal server ERROR' });
    }
});
const findDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let dept = yield department.findOne({
            where: {
                dept_number: req.params.dept_number
            },
            include: {
                model: employee,
            }
        });
        // console.log('this is dept', dept)
        if (dept instanceof department) {
            return res.status(200).json(dept);
        }
    }
    catch (error) {
        return res.status(500).send({ success: false, message: 'Internal server ERROR' });
    }
});
const getAllDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let allDepartments = yield department.findAll();
        if (allDepartments) {
            console.log(allDepartments);
            return res.status(200).json(allDepartments);
        }
        else {
            return res.status(404).json({ message: ' there is no department in db' });
        }
    }
    catch (error) {
        return res.status(500).send({ success: false, message: 'Internal server ERROR' });
    }
});
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let departmentToDelete = yield department.findOne({
            where: {
                dept_number: req.body.dept_number
            }
        });
        if (departmentToDelete instanceof department) {
            yield departmentToDelete.destroy();
            return res.status(200).send({ message: 'department is deleted' });
        }
        else {
            return res.status(404).send({ message: 'use not found' });
        }
    }
    catch (error) {
        return res.status(500).send({ success: false, message: 'Internal server ERROR' });
    }
});
module.exports = {
    addDepartment,
    findDepartment,
    deleteDepartment,
    getAllDepartments,
};
