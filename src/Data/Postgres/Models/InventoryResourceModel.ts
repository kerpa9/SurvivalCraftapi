import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resource } from "./ResourceModel";
import { Inventary } from "./InventaryModel";
import { Items } from "./ItemsModel";

@Entity()
export class InventoryResource extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Items, (item) => item.invItems)
  item: Items;

  @ManyToOne(() => Resource, (resource) => resource.invResource)
  resource: Resource;

  @ManyToOne(() => Inventary, (inventary) => inventary.invRes)
  inventary: Inventary;
}
