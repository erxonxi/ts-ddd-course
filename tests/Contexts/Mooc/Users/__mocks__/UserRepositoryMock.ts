import { UserRepository } from '../../../../../src/Contexts/Mooc/Users/domain/UserRepository';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';
import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';

export class UserRepositoryMock implements UserRepository {
  private mockSave = jest.fn();
  private mockSearch = jest.fn();

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  async search(id: UserId): Promise<Nullable<User>> {
    return this.mockSearch(id);
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as User;
    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }
}
