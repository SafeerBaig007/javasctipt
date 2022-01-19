"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const employeeMiddleware = require('../middlewares/employee-middleware');
const employeeController = require('../controllers/employee-controllers');
router.use('/', (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', (req, res) => {
    res.send('this is add Employee route');
});
router.get('/findEmployee/:employee_id', employeeMiddleware.findOneEmployeeMiddleware, (req, res) => {
    res.status(200).send(req.params);
});
router.post('/addEmployee', employeeMiddleware.addEmployeeMiddleware, employeeController.addEmployee);
router.post('/deleteEmployee', employeeMiddleware.deleteEmployeeMiddleware, (req, res) => {
    res.send('this is delete Employee route');
});
module.exports = router;
