import { ShopRepository } from '../domain/ShopRepository';
import { ShopName } from '../domain/ShopName';
import { ShopId } from '../domain/ShopId';
import { Shop } from '../domain/Shop';
import { UserId } from '../../Users/domain/UserId';
import { ShopDescription } from '../domain/ShopDescription';

export type ShopCreatorParams = {
  id: string;
  name: string;
  description: string;
  assinged_user_id: string;
};

export class ShopCreator {
  private repository: ShopRepository;

  constructor(repository: ShopRepository) {
    this.repository = repository;
  }

  async run({ id, name, description, assinged_user_id }: ShopCreatorParams): Promise<void> {
    const shop = new Shop({
      id: new ShopId(id),
      name: new ShopName(name),
      description: new ShopDescription(description),
      assinged_user_id: new UserId(assinged_user_id)
    });
    return this.repository.save(shop);
  }
}
