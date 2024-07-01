import { Request, Response } from "express";
import Course from "../models/Course";

export async function createCourse(req: Request, res: Response) {
  const newCourse: Course = new Course(req.body);
  await newCourse.save();

  res.status(200).json(newCourse);
}
export async function getAllCourse(req: Request, res: Response) {
  const courses: Course[] = await Course.findAll();

  res.status(200).json(courses);
}
export async function getCourse(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedCourse: Course | null = await Course.findByPk(pk);

  res.status(200).json(wantedCourse);
}
export async function deleteCourse(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedCourse: Course | null = await Course.findByPk(pk);
  await wantedCourse?.destroy();
  res.status(200).json({ msg: "Destoryed" });
}
export async function updateCourse(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedCourse: Course | null = await Course.findByPk(pk);

  await wantedCourse?.update(req.body.updated);
  res.status(200).json({ msg: "Updated" });
}
