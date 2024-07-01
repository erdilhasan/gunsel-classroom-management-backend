import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./Student";
import StudentCourse from "./StudentCourse";

@Table({ timestamps: true, tableName: "courses", modelName: "Course" })
class Course extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({ type: DataType.TEXT })
  declare name: string;

  @BelongsToMany(() => Student, () => StudentCourse)
  declare students: Student;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}

export default Course;
