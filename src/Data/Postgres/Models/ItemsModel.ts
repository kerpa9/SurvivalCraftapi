import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { InventoryItem } from "./InventoryItmeModel";

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToMany(() => InventoryItem, (invItem) => invItem.item)
  invItems: InventoryItem[];

  @Column({
    type: "varchar",
    nullable: false,
  })
  name: string;

  @Column({
    type: "text",
  })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
