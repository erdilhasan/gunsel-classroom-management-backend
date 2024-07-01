import { Request, Response } from "express";
import Class from "../models/Class";
import Student from "../models/Student";

export async function createClass(req: Request, res: Response) {
  const newClass: Class = new Class(req.body);
  await newClass.save();

  res.status(200).json(newClass);
}

export async function getAllClass(req: Request, res: Response) {
  const classes: Class[] = await Class.findAll();

  res.status(200).json(classes);
}

export async function getClass(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedClass: Class | null = await Class.findByPk(pk);

  res.status(200).json(wantedClass);
}

export async function viewClass(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedClass: Class | null = await Class.findByPk(pk, {
    include: [Student],
  });

  res.status(200).json({
    ...wantedClass?.toJSON(),
    noOfStudents: wantedClass?.students.length,
  });
}

export async function deleteClass(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;

  const wantedClass: Class | null = await Class.findByPk(pk);
  await wantedClass?.destroy();
  res.status(200).json({ msg: "Destoryed" });
}

export async function updateClass(req: Request, res: Response) {
  const pk: string = req.body.primaryKey;
  const wantedClass: Class | null = await Class.findByPk(pk);

  await wantedClass?.update(req.body.updated);
  res.status(200).json({ msg: "Updated" });
}

export async function addStudent(req: Request, res: Response) {
  const studentId: string = req.body.studentId;
  const classId: string = req.body.classId;

  const student: Student | null = await Student.findByPk(studentId);
  const wantedClass: Class | null = await Class.findByPk(classId);

  await wantedClass?.$add("students", student as Student);

  res.status(200).json({ msg: "Student Added To The Class." });
}
