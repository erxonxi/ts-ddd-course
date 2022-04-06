import { ShopCreatorParams } from '../../../../../src/Contexts/Mooc/Shops/application/ShopCreator';
import { Shop } from '../../../../../src/Contexts/Mooc/Shops/domain/Shop';
import { ShopId } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopId';
import { ShopName } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopName';
import { ShopDescription } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopDescription';
import { UserIdMother } from '../../Users/domain/UserIdMother';
import { ShopIdMother } from '../domain/ShopIdMother';
import { ShopNameMother } from '../domain/ShopNameMother';
import { ShopDescriptionMother } from '../domain/ShopDescriptionMother';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';

export class ShopMother {
  static randomInvalidShopName() {
    return new Shop({
      id: ShopIdMother.random(),
      name: new ShopName(ShopNameMother.invalidName()),
      description: ShopDescriptionMother.random(),
      assinged_user_id: UserIdMother.random()
    });
  }

  static random() {
    return new Shop({
      id: ShopIdMother.random(),
      name: ShopNameMother.random(),
      description: ShopDescriptionMother.random(),
      assinged_user_id: UserIdMother.random()
    });
  }

  static fromRequest(request: ShopCreatorParams) {
    return new Shop({
      id: new ShopId(request.id),
      name: new ShopName(request.name),
      description: new ShopDescription(request.description),
      assinged_user_id: new UserId(request.assinged_user_id)
    });
  }
}
