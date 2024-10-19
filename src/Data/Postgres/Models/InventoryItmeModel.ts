import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Items } from "./ItemsModel";
import { Inventary } from "./InventaryModel";

@Entity()
export class InventoryItem extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Items, (item) => item.invItems)
  item: Items;

  @ManyToOne(() => Inventary, (inventary) => inventary.invItem)
  inventary: Inventary;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
