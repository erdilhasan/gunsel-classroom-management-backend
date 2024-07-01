import Class from "../models/Class";
import Course from "../models/Course";
import Student from "../models/Student";
import StudentCourse from "../models/StudentCourse";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db_config: any = {
  development: {
    username: "erdil",
    password: "123456",
    database: "gunsel_classroom",
    host: "localhost",
    dialect: "mysql",
    models: [Class, Student, Course, StudentCourse],
  },
};

export default db_config;
// TODO: change to dotenv
