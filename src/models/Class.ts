import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./Student";

@Table({ timestamps: true, tableName: "classes", modelName: "Class" })
class Class extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({ type: DataType.TEXT })
  declare name: string;

  @HasMany(() => Student)
  declare students: Student[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}

export default Class;
