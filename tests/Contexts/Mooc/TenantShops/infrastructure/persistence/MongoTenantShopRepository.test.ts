import container from '../../../../../../src/apps/mooc/backend/dependency-injection';
import { TenantId } from '../../../../../../src/Contexts/Mooc/Tenants/domain/TenantId';
import { TenantShopRepository } from '../../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopRepository';
import { UuidMother } from '../../../../Shared/domain/UuidMother';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { TenantShopMother } from '../../application/TenantShopMother';

const repository: TenantShopRepository = container.get('Mooc.TenantShops.domain.TenantShopRepository');
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
      const shop = TenantShopMother.random();

      repository.setTenantId(new TenantId(UuidMother.random()));
      await repository.save(shop);
    });
  });

  describe('#search', () => {
    it('should return an existing Shop', async () => {
      const expectedShop = TenantShopMother.random();
      repository.setTenantId(new TenantId(UuidMother.random()));

      await repository.save(expectedShop);

      const shop = await repository.search(expectedShop.id);

      expect(expectedShop).toEqual(shop);
    });

    it('should not return a non existing Shop', async () => {
      expect(await repository.search(TenantShopMother.random().id)).toBeFalsy();
    });
  });
});
