import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Course from "./Course";
import StudentCourse from "./StudentCourse";
import Class from "./Class";

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

  @ForeignKey(() => Class)
  @Column({ type: DataType.UUID })
  declare classId: number;

  @BelongsTo(() => Class)
  declare class: Class;

  //Also adds StudentCourse Table for some reason, not intentional
  @BelongsToMany(() => Course, () => StudentCourse)
  declare courses: Course[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}

export default Student;
