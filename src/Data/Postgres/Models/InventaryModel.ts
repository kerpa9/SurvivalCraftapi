import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { InventoryItem } from "./InventoryItmeModel";
import { InventoryResource } from "./InventoryResourceModel";
import { Players } from "./PlayerModel";

@Entity()
export class Inventary extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToMany(() => InventoryItem, (invItem) => invItem.inventary)
  invItem: InventoryItem[];

  @OneToMany(() => InventoryResource, (invRes) => invRes.inventary)
  invRes: InventoryResource[];

  @OneToOne(() => Players)
  @JoinColumn()
  player: Players;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
