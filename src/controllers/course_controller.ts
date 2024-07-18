import { Request, Response } from "express";
import Course from "../models/Course";
import Student from "../models/Student";
import * as admin from "firebase-admin";

export async function createCourse(req: Request, res: Response) {
  const newCourse: Course = new Course(req.body);
  await newCourse.save();

  const message = {
    notification: {
      title: "New Course",
      body: "A new course" + " '" + req.body.name + "' is available",
    },
    topic: "general",
  };
  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Notification sent:", response);
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
    });

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
export async function viewCourse(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedCourse: Course | null = await Course.findByPk(pk, {
    include: [Student],
  });

  res.status(200).json({
    ...wantedCourse?.toJSON(),
    noOfStudents: wantedCourse?.students.length,
  });
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
