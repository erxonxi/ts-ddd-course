import container from '../../../../../../src/apps/mooc/backend/dependency-injection';
import { ShopRepository } from '../../../../../../src/Contexts/Mooc/Shops/domain/ShopRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { ShopMother } from '../../application/ShopMother';

const repository: ShopRepository = container.get('Mooc.Shops.domain.ShopRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Mooc.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('ShopRepository', () => {
  describe('#save', () => {
    it('should save a User', async () => {
      const shop = ShopMother.random();

      await repository.save(shop);
    });
  });

  describe('#search', () => {
    it('should return an existing Shop', async () => {
      const expectedShop = ShopMother.random();
      await repository.save(expectedShop);

      const shop = await repository.search(expectedShop.id);

      expect(expectedShop).toEqual(shop);
    });

    it('should not return a non existing Shop', async () => {
      expect(await repository.search(ShopMother.random().id)).toBeFalsy();
    });
  });
});
