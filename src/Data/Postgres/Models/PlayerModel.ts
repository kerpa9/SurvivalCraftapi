import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "./UsersModel";
import { ClanMembers } from "./ClanMembers";
import { Construction } from "./ConstructionsModel";
import { QuestPlayer } from "./QuesPlayersModel";

@Entity()
export class Players extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Users, (user) => user.players)
  user: Users;

  @OneToMany(() => ClanMembers, (clanmember) => clanmember.players)
  clanmembers: ClanMembers[];

  @OneToMany(() => Construction, (construction) => construction.player)
  constructions: Construction[];

  @OneToMany(() => QuestPlayer, (questPlayer) => questPlayer.player)
  questPlayers: QuestPlayer[];

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
