import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Tenant } from '../../domain/Tenant';
import { TenantId } from '../../domain/TenantId';
import { TenantRepository } from '../../domain/TenantRepository';

export interface TenantDocument {
  _id: string;
  name: string;
}

export class MongoTenantRepository extends MongoRepository<Tenant> implements TenantRepository {
  public save(tenant: Tenant): Promise<void> {
    return this.persist(tenant.id.value, tenant);
  }

  public async search(id: TenantId): Promise<Nullable<Tenant>> {
    const collection = await this.collection();
    const document = await collection.findOne<TenantDocument>({ _id: id.value });

    return document ? Tenant.fromPrimitives({ ...document, id: id.value }) : null;
  }

  protected moduleName(): string {
    return 'tenants';
  }
}
