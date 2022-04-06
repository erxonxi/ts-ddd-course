import { ShopCreator } from '../../../../../src/Contexts/Mooc/Shops/application/ShopCreator';
import { ShopNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopNameLengthExceeded';
import { ShopRepositoryMock } from '../__mocks__/ShopRepositoryMock';
import { ShopMother } from './ShopMother';

let repository: ShopRepositoryMock;
let shopCreator: ShopCreator;

beforeEach(() => {
  repository = new ShopRepositoryMock();
  shopCreator = new ShopCreator(repository);
});

describe('ShopCreator', () => {
  it('create new shop', async () => {
    const shop = ShopMother.random();
    await shopCreator.run(shop.toPrimitives());
    repository.assertLastSavedUserIs(shop);
  });

  it('throw error at create new shop', async () => {
    expect(() => {
      const shop = ShopMother.randomInvalidShopName();
      shopCreator.run(shop.toPrimitives());
      repository.assertLastSavedUserIs(shop);
    }).toThrow(ShopNameLengthExceeded);
  });
});
