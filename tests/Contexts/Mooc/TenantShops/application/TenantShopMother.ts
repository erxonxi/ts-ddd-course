import { TenantShopCreatorParams } from '../../../../../src/Contexts/Mooc/TenantShops/application/TenantShopCreator';
import { TenantShop } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShop';
import { TenantShopId } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopId';
import { TenantShopName } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopName';
import { TenantShopDescription } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopDescription';
import { UserIdMother } from '../../Users/domain/UserIdMother';
import { TenantShopIdMother } from '../domain/TenantShopIdMother';
import { TenantShopNameMother } from '../domain/TenantShopNameMother';
import { TenantShopDescriptionMother } from '../domain/TenantShopDescriptionMother';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';

export class TenantShopMother {
  static randomInvalidTenantShopName() {
    return new TenantShop({
      id: TenantShopIdMother.random(),
      name: new TenantShopName(TenantShopNameMother.invalidName()),
      description: TenantShopDescriptionMother.random(),
      assinged_user_id: UserIdMother.random()
    });
  }

  static random() {
    return new TenantShop({
      id: TenantShopIdMother.random(),
      name: TenantShopNameMother.random(),
      description: TenantShopDescriptionMother.random(),
      assinged_user_id: UserIdMother.random()
    });
  }

  static fromRequest(request: TenantShopCreatorParams) {
    return new TenantShop({
      id: new TenantShopId(request.id),
      name: new TenantShopName(request.name),
      description: new TenantShopDescription(request.description),
      assinged_user_id: new UserId(request.assinged_user_id)
    });
  }
}
