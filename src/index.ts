// src/index.ts
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Classroom!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
