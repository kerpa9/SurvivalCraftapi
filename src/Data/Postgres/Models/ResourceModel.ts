import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { InventoryResource } from "./InventoryResourceModel";

@Entity()
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  // @OneToMany(() => InventoryItem, (invItem) => invItem.item)
  // invItems: InventoryItem[];

  @OneToMany(() => InventoryResource, (invResource) => invResource.resource)
  invResource: InventoryResource[];

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
