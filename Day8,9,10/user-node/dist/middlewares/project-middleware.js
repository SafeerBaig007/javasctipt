"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.use("/", (req, res, next) => {
    console.log("hiting base route of project at", new Date());
    next();
});
router.get("/", (req, res, next) => {
    res.send("this is add project route");
});
router.get("/findProject/:project_id", (req, res, next) => {
    res.status(200).send(req.params);
});
router.post("/addProject", (req, res, next) => {
    res.send(req.body);
});
router.post("/deleteProject", (req, res, next) => {
    res.send("this is delete project route");
});
module.exports = router;
