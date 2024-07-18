// src/index.ts
import express, { Request, Response } from "express";
import "./config/sequelize";
import bodyParser from "body-parser";
import classRouter from "./routes/class_route";
import studentRouter from "./routes/student_route";
import courseRouter from "./routes/course_route";
import cors from "cors";
import * as admin from "firebase-admin";
import { serviceAccount } from "./config/serviceAccountKey";
const app = express();
const port = 3000;

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Classroom!");
});

app.use("/api/class", classRouter);
app.use("/api/student", studentRouter);
app.use("/api/course", courseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
