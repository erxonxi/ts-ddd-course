import container from '../../../../../../src/apps/mooc/backend/dependency-injection';
import { TenantRepository } from '../../../../../../src/Contexts/Mooc/Tenants/domain/TenantRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { TenantMother } from '../../application/TenantMother';

const repository: TenantRepository = container.get('Mooc.Tenants.domain.TenantRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Mooc.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('TenantRepository', () => {
  describe('#save', () => {
    it('should save a Tenant', async () => {
      const Tenant = TenantMother.random();

      await repository.save(Tenant);
    });
  });

  describe('#search', () => {
    it('should return an existing Tenant', async () => {
      const expectedTenant = TenantMother.random();
      await repository.save(expectedTenant);

      const Tenant = await repository.search(expectedTenant.id);

      expect(expectedTenant).toEqual(Tenant);
    });

    it('should not return a non existing Tenant', async () => {
      expect(await repository.search(TenantMother.random().id)).toBeFalsy();
    });
  });
});
