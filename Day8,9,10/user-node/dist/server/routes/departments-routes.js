"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
// import express from "express";
const router = express.Router();
const departmentMiddleware = require('../middlewares/departments-middleware');
const departmentController = require('../controllers/department-controllers');
router.use('/', (req, res, next) => {
    console.log('Time', new Date());
    next();
});
router.get('/', (req, res, next) => {
    res.status(200).send('this is base route of department');
});
router.get('/findDepartment/:dept_number', departmentMiddleware.findDepartment, departmentController.findDepartment);
router.get('/allDepartments', departmentController.getAllDepartments);
router.post('/addDepartment', departmentMiddleware.addDepartment, departmentController.addDepartment);
router.post('/deleteDepartment', departmentMiddleware.deleteDepartment, departmentController.deleteDepartment);
module.exports = router;
