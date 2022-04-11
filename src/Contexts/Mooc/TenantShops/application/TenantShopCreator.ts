import { TenantShopDescription } from '../domain/TenantShopDescription';
import { TenantShopRepository } from '../domain/TenantShopRepository';
import { TenantShopName } from '../domain/TenantShopName';
import { TenantShopId } from '../domain/TenantShopId';
import { TenantShop } from '../domain/TenantShop';
import { UserId } from '../../Users/domain/UserId';
import { TenantId } from '../../Tenants/domain/TenantId';

export type TenantShopCreatorParams = {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  assinged_user_id: string;
};

export class TenantShopCreator {
  private repository: TenantShopRepository;

  constructor(repository: TenantShopRepository) {
    this.repository = repository;
  }

  async run({ id, tenant_id, name, description, assinged_user_id }: TenantShopCreatorParams): Promise<void> {
    this.repository.setTenantId(new TenantId(tenant_id));

    const tenantShop = new TenantShop({
      id: new TenantShopId(id),
      name: new TenantShopName(name),
      description: new TenantShopDescription(description),
      assinged_user_id: new UserId(assinged_user_id)
    });
    return this.repository.save(tenantShop);
  }
}
