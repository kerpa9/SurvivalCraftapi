import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Players } from "./PlayerModel";

@Entity()
export class Construction {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Players, (player) => player.constructions)
  player: Players;

  @Column({
    type: "varchar",
    nullable: false,
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  type: string;

  @Column({
    type: "int",
    nullable: false,
    default: 0,
  })
  level: number;

  @Column({
    type: "varchar",
  })
  location: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
