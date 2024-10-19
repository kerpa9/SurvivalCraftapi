import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quest } from "./QuestsModel";
import { Players } from "./PlayerModel";

@Entity()
export class QuestPlayer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Players, (player) => player.questPlayers)
  player: Players;

  @ManyToOne(() => Quest, (quest) => quest.questPlayer)
  quest: Quest;

  @Column({
    type: "boolean",
    nullable: false,
    default: false,
  })
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
