const express = require('express')
// import express from "express";
const router = express.Router()


router.use('/', (req, res, next)=>{
    console.log('hiting base route of project at', new Date)
    next()
});

router.get('/',(req, res)=>{
    res.send('this is add project route');
})

router.get('/findProject/:project_id',(req, res)=>{
    res.status(200).send( req.params);
})

router.post('/addProject',(req, res)=>{
    res.send(req.body);
})

router.post('/deleteProject',(req, res)=>{
    res.send('this is delete project route');
})

module.exports = router