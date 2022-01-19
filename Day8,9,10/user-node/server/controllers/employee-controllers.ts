let process = require("process");
let _path = process.cwd()
const employeeModal = require(_path + '/server/models').employee
import { Request,  Response} from "express";


const addEmployee = async (req: Request, res: Response)=>{
    try {
        console.log('body',req.body)
        await employeeModal.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
            sex: req.body.sex,
            address: req.body.address,
            title: req.body.title,
            skill: req.body.skill,
            salary: req.body.salary,
            dept_number: req.body.dept_number,
        })
        return res.status(201).send({success: true, message : 'Department add successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, message : 'Internal server ERROR'})
    }
}


module.exports = {
    addEmployee
}