import { ShopId } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class ShopIdMother {
  static create(value: string): ShopId {
    return new ShopId(value);
  }

  static random(): ShopId {
    return this.create(UuidMother.random());
  }
}
