import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Players } from "./PlayerModel";
import { Clans } from "./ClansModel";

enum RoleClan {
  Master = "Master",
  OFFICER = "OFFICER",
  SUBOFFICER = "SUBOFFICER",
  MEMBER = "MEMBER",
}

@Entity()
export class ClanMembers extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Players, (player) => player.clanmembers)
  players: Players;

  @ManyToOne(() => Clans, (clan) => clan.clanmembers)
  clans: Clans;

  @Column({
    type: "enum",
    nullable: false,
    enum: RoleClan,
    default: RoleClan.MEMBER,
  })
  roleClan: RoleClan;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
