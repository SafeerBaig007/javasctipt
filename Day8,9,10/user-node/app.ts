var express = require('express');
import { Request,  Response} from "express";
const http = require('http');

// import logger from "morgan";
// const logger = require('morgan');
// import express, { Request, Response, NextFunction } from "express";
// import bodyParser from "body-parser";
var bodyParser = require('body-parser');
var employeeRoutes = require('./server/routes/employee-routes');
// import employeeRoutes from "./server/routes/employee-routes";
var departmentRoutes = require('./server/routes/departments-routes');
var projectRoutes = require('./server/routes/project-routes');
// Set up the express app
var app = express();
//let env:string
var age = 32;
// Log requests to the console.
// app.use(logger(env));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req: Request, res: Response)=> { return res.status(200).send({
    message: 'Welcome to the beginning.'
}); });
app.use('/employee', employeeRoutes);
app.use('/department', departmentRoutes);
app.use('/project', projectRoutes);

export = app