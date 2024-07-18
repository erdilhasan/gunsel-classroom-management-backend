import { Request, Response } from "express";
import Student from "../models/Student";
import Course from "../models/Course";
import Class from "../models/Class";
import * as admin from "firebase-admin";

export async function createStudent(req: Request, res: Response) {
  const newStudent: Student = new Student(req.body);
  await newStudent.save();

  res.status(200).json(newStudent);
}

export async function getAllStudent(req: Request, res: Response) {
  const students: Student[] = await Student.findAll();

  res.status(200).json(students);
}
export async function getStudent(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedStudent: Student | null = await Student.findByPk(pk);

  res.status(200).json(wantedStudent);
}

export async function viewStudent(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedStudent: Student | null = await Student.findByPk(pk, {
    include: [Course, Class],
  });

  res.status(200).json({
    ...wantedStudent?.toJSON(),
    noOfCourses: wantedStudent?.courses.length,
  });
}

export async function deleteStudent(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedStudent: Student | null = await Student.findByPk(pk);
  await wantedStudent?.destroy();
  res.status(200).json({ msg: "Destoryed" });
}

export async function updateStudent(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedStudent: Student | null = await Student.findByPk(pk);

  await wantedStudent?.update(req.body.updated);
  res.status(200).json({ msg: "Updated" });
}

export async function enrollCourse(req: Request, res: Response) {
  const studentId: string = req.body.studentId;
  const courseId: string = req.body.courseId;

  const student: Student | null = await Student.findByPk(studentId);
  const course: Course | null = await Course.findByPk(courseId);

  await course?.$add("students", student as Student);

  res.status(200).json({ msg: "Student Enrolled To The Course." });
}
export async function subscribeToAllNotifications(req: Request, res: Response) {
  const token: string = req.body.token;

  admin.messaging().subscribeToTopic(token, "general");

  res.status(200).json({ msg: "Student subscribed To all notifications." });
}
