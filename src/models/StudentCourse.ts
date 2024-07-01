import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Course from "./Course";
import Student from "./Student";

@Table
class StudentCourse extends Model {
  @ForeignKey(() => Student)
  @Column
  declare studentId: number;

  @ForeignKey(() => Course)
  @Column
  declare courseId: number;
}

export default StudentCourse;
