import { TenantShopDescription } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopDescription';
import { WordMother } from '../../../Shared/domain/WordMother';

export class TenantShopDescriptionMother {
  static create(value: string): TenantShopDescription {
    return new TenantShopDescription(value);
  }

  static random(): TenantShopDescription {
    return this.create(WordMother.random());
  }
}
