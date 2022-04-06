import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Shop } from '../../domain/Shop';
import { ShopId } from '../../domain/ShopId';
import { ShopRepository } from '../../domain/ShopRepository';

export interface ShopDocument {
  _id: string;
  name: string;
  description: string;
  assinged_user_id: string;
}

export class MongoShopRepository extends MongoRepository<Shop> implements ShopRepository {
  public save(Shop: Shop): Promise<void> {
    return this.persist(Shop.id.value, Shop);
  }

  public async search(id: ShopId): Promise<Nullable<Shop>> {
    const collection = await this.collection();
    const document = await collection.findOne<ShopDocument>({ _id: id.value });

    return document ? Shop.fromPrimitives({ ...document, id: id.value }) : null;
  }

  protected moduleName(): string {
    return 'shops';
  }
}
