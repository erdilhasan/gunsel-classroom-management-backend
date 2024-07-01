import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Course from "./Course";
import StudentCourse from "./StudentCourse";

@Table({ timestamps: true, tableName: "students", modelName: "Student" })
class Student extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({ type: DataType.TEXT })
  declare name: string;
  @Column({ type: DataType.INTEGER })
  declare age: number;

  @BelongsToMany(() => Course, () => StudentCourse)
  declare courses: Course[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}

export default Student;
