const express = require("express");
const router = express.Router();
import { Request,  Response, NextFunction} from "express";


router.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("hiting base route of project at", new Date());
  next();
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("this is add project route");
});

router.get("/findProject/:project_id", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send(req.params);
});

router.post("/addProject", (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
});

router.post("/deleteProject", (req: Request, res: Response, next: NextFunction) => {
  res.send("this is delete project route");
});

module.exports = router;
