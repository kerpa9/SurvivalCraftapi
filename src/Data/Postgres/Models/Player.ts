import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Players extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 80,
    type: "varchar",
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: "int",
    nullable: false,
    default: 1,
    unique: true,
  })
  level: number;

  @Column({
    type: "float",
    nullable: false,
    default: 0,
  })
  experience: number;

  @Column({
    type: "float",
    nullable: false,
    default: 80,
  })
  health: number;

  @Column({
    type: "float",
    nullable: false,
    default: 100,
  })
  energy: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
