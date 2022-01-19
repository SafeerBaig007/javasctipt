const Joi = require('joi');

const addEmployeeValidation =  Joi.object({
        first_name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(10).required(),
        last_name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(10).required(),
        dob: Joi.date().required(),
        sex: Joi.boolean().required(),
        address: Joi.string().required(),
        title: Joi.string().required(),
        skill: Joi.string().required(),
        salary: Joi.number().required(),
        dept_number: Joi.number()
    })



    module.exports ={
        addEmployeeValidation
    }