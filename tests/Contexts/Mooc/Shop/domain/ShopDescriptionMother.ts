import { ShopDescription } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopDescription';
import { WordMother } from '../../../Shared/domain/WordMother';

export class ShopDescriptionMother {
  static create(value: string): ShopDescription {
    return new ShopDescription(value);
  }

  static random(): ShopDescription {
    return this.create(WordMother.random());
  }
}
