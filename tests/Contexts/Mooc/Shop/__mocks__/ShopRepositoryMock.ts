import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';
import { ShopRepository } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopRepository';
import { Shop } from '../../../../../src/Contexts/Mooc/Shops/domain/Shop';
import { ShopId } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopId';

export class ShopRepositoryMock implements ShopRepository {
  private mockSave = jest.fn();

  async save(user: Shop): Promise<void> {
    this.mockSave(user);
  }

  async search(id: ShopId): Promise<Nullable<Shop>> {
    const mock = this.mockSave.mock;
    var user = null;
    mock.calls.map(savedUsers => {
      if (savedUsers[0].id.value == id.value) {
        user = savedUsers[0];
      }
    });
    return user;
  }

  assertLastSavedUserIs(expected: Shop): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as Shop;
    expect(lastSavedUser).toBeInstanceOf(Shop);
    expect(lastSavedUser.id).toEqual(expected.id);
  }
}
