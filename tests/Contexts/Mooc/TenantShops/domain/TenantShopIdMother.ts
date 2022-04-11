import { TenantShopId } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class TenantShopIdMother {
  static create(value: string): TenantShopId {
    return new TenantShopId(value);
  }

  static random(): TenantShopId {
    return this.create(UuidMother.random());
  }
}
