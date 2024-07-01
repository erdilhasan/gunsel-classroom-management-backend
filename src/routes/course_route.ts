import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourse,
  updateCourse,
} from "../controllers/course_controller";

const courseRouter: Router = Router();

courseRouter.post("/create", createCourse);
courseRouter.get("/getCourse", getCourse);
courseRouter.get("/getAllCourse", getAllCourse);
courseRouter.post("/deleteCourse", deleteCourse);
courseRouter.post("/updateCourse", updateCourse);

export default courseRouter;
