const express = require('express')
const router = express.Router()
const employeeMiddleware = require('../middlewares/employee-middleware');
const employeeController = require('../controllers/employee-controllers')
import { Request,  Response, NextFunction} from "express";


router.use('/', (req: Request, res: Response, next: NextFunction)=>{
    console.log('Time: ', Date.now())
    next();
})

router.get('/',(req: Request, res: Response)=>{
    res.send('this is add Employee route');
})

router.get('/findEmployee/:employee_id', employeeMiddleware.findOneEmployeeMiddleware,(req: Request, res: Response)=>{
    res.status(200).send( req.params);
})

router.post('/addEmployee', employeeMiddleware.addEmployeeMiddleware,employeeController.addEmployee)

router.post('/deleteEmployee', employeeMiddleware.deleteEmployeeMiddleware,(req: Request, res: Response)=>{
    res.send('this is delete Employee route');
})

module.exports = router;