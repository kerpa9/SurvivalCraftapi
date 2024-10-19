import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ClanMembers } from "./ClanMembers";

@Entity()
export class Clans {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToMany(() => ClanMembers, (clanmember) => clanmember.clans)
  clanmembers: ClanMembers[];

  @Column({
    type: "varchar",
    nullable: false,
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
