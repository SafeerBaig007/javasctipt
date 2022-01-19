// const express = require('express')
const department = require('../models').departments;
const employee = require("../models").employee;
// import { Request,  Response} from "express";

const addDepartment = async (req, res)=>{
    try {
        await department.create({dept_name : req.body.dept_name, address: req.body.address})
        return res.status(201).send({success: true, message : 'Department add successfully'})
    } catch (error) {
        return res.status(500).send({success: false, message : 'Internal server ERROR'})
    } 
}

const findDepartment = async (req , res)=>{
    try {
        let dept = await department.findOne({
            where : {
                dept_number : req.params.dept_number
            },
            include: {
                model: employee,
              }
             
        })
        // console.log('this is dept', dept)
        if (dept instanceof department){
            return res.status(200).json(dept)
        }
    } catch (error) {
        return res.status(500).send({success: false, message : 'Internal server ERROR'})
    }
}

 const getAllDepartments = async (req, res)=>{
     try {
         let allDepartments = await department.findAll();
         if (allDepartments){
             console.log(allDepartments)
             return res.status(200).json(allDepartments)
         }else{
             return res.status(404).json({message : ' there is no department in db'})
         }
     } catch (error) {
        return res.status(500).send({success: false, message : 'Internal server ERROR'})
     }
 }

const deleteDepartment = async (req, res)=>{
    try {
        let departmentToDelete = await department.findOne({
            where: {
                dept_number : req.body.dept_number
            }
        })
        if (departmentToDelete instanceof department){
            await departmentToDelete.destroy()
            return res.status(200).send({message: 'department is deleted'})
        }else{
            return res.status(404).send({message: 'use not found'})
        }
    } catch (error) {
        return res.status(500).send({success: false, message : 'Internal server ERROR'})
    }
}

module.exports = {
    addDepartment,
    findDepartment,
    deleteDepartment,
    getAllDepartments,
}