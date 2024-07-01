import { Router } from "express";
import {
  addStudent,
  createClass,
  deleteClass,
  getAllClass,
  getClass,
  updateClass,
  viewClass,
} from "../controllers/class_controller";

const classRouter: Router = Router();

classRouter.post("/create", createClass);
classRouter.get("/getClass", getClass);
classRouter.get("/viewClass", viewClass);
classRouter.get("/getAllClass", getAllClass);
classRouter.post("/deleteClass", deleteClass);
classRouter.post("/updateClass", updateClass);
classRouter.post("/addStudent", addStudent);

export default classRouter;
