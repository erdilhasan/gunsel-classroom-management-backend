import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  enrollCourse,
  getAllStudent,
  getStudent,
  updateStudent,
  viewStudent,
} from "../controllers/student_controller";

const studentRouter: Router = Router();

studentRouter.post("/create", createStudent);
studentRouter.get("/getStudent", getStudent);
studentRouter.get("/viewStudent", viewStudent);
studentRouter.get("/getAllStudent", getAllStudent);
studentRouter.post("/deleteStudent", deleteStudent);
studentRouter.post("/updateStudent", updateStudent);
studentRouter.post("/enrollCourse", enrollCourse);

export default studentRouter;
