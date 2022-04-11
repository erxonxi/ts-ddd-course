import { Nullable } from '../../../../Shared/domain/Nullable';
import { TenantMongoRepository } from '../../../Shared/infrastructure/persistence/mongo/TenantMongoRepository';
import { TenantId } from '../../../Tenants/domain/TenantId';
import { TenantShop } from '../../domain/TenantShop';
import { TenantShopId } from '../../domain/TenantShopId';
import { TenantShopRepository } from '../../domain/TenantShopRepository';

export interface TenantShopDocument {
  _id: string;
  name: string;
  description: string;
  assinged_user_id: string;
}

export class MongoTenantShopRepository extends TenantMongoRepository<TenantShop> implements TenantShopRepository {
  private module_name = 'shops_';
  private tenant_id = new TenantId('23925cc7-2c3c-45a2-9060-e389f9cea64b');

  public setTenantId(tenantId: TenantId): void {
    this.tenant_id = tenantId;
  }

  public save(tenantShop: TenantShop): Promise<void> {
    return this.persist(tenantShop.id.value, tenantShop);
  }

  public async search(id: TenantShopId): Promise<Nullable<TenantShop>> {
    const collection = await this.collection();
    const document = await collection.findOne<TenantShopDocument>({ _id: id.value });

    return document ? TenantShop.fromPrimitives({ ...document, id: id.value }) : null;
  }

  protected moduleName(): string {
    return this.module_name + this.tenant_id.value;
  }
}
