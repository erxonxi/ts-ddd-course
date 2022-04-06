import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ShopDescription } from './ShopDescription';
import { ShopId } from './ShopId';
import { ShopName } from './ShopName';
import { UserId } from '../../Users/domain/UserId';

export class Shop extends AggregateRoot {
  readonly id: ShopId;
  readonly name: ShopName;
  readonly description: ShopDescription;
  readonly assinged_user_id: UserId;

  constructor({
    id,
    name,
    description,
    assinged_user_id
  }: {
    id: ShopId;
    name: ShopName;
    description: ShopDescription;
    assinged_user_id: UserId;
  }) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.assinged_user_id = assinged_user_id;
  }

  static fromPrimitives(plainData: { id: string; name: string; description: string; assinged_user_id: string }): Shop {
    return new Shop({
      id: new ShopId(plainData.id),
      name: new ShopName(plainData.name),
      description: new ShopDescription(plainData.description),
      assinged_user_id: new UserId(plainData.assinged_user_id)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      assinged_user_id: this.assinged_user_id.value
    };
  }
}
