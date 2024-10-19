import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Players } from "./PlayerModel";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  username: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  password: string;

  @OneToMany(() => Players, (player) => player.user)
  players: Players[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
