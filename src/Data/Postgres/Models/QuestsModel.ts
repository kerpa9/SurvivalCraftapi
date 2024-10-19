import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { QuestPlayer } from "./QuesPlayersModel";

@Entity()
export class Quest {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToMany(() => QuestPlayer, (questPlayer) => questPlayer.quest)
  questPlayer: QuestPlayer[];

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: "text",
    nullable: false,
  })
  description: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  reward: string;

  @Column({
    type: "float",
    nullable: false,
  })
  exp: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
