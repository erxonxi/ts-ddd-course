import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from '../../Users/domain/UserId';
import { TenantShopDescription } from './TenantShopDescription';
import { TenantShopName } from './TenantShopName';
import { TenantShopId } from './TenantShopId';

export class TenantShop extends AggregateRoot {
  readonly id: TenantShopId;
  readonly name: TenantShopName;
  readonly description: TenantShopDescription;
  readonly assinged_user_id: UserId;

  constructor({
    id,
    name,
    description,
    assinged_user_id
  }: {
    id: TenantShopId;
    name: TenantShopName;
    description: TenantShopDescription;
    assinged_user_id: UserId;
  }) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.assinged_user_id = assinged_user_id;
  }

  static fromPrimitives(plainData: {
    id: string;
    name: string;
    description: string;
    assinged_user_id: string;
  }): TenantShop {
    return new TenantShop({
      id: new TenantShopId(plainData.id),
      name: new TenantShopName(plainData.name),
      description: new TenantShopDescription(plainData.description),
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
