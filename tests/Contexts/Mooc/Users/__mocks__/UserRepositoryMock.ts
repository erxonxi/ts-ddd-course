import { UserRepository } from '../../../../../src/Contexts/Mooc/Users/domain/UserRepository';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';
import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';
import { UserEmail } from '../../../../../src/Contexts/Mooc/Users/domain/UserEmail';
import { UserPassword } from '../../../../../src/Contexts/Mooc/Users/domain/UserPassword';
import { HashEncrypt } from '../../../../../src/Contexts/Mooc/Users/infrastructure/encrypt/HashEncrypt';

export class UserRepositoryMock implements UserRepository {
  private mockSave = jest.fn();
  // private mockSearch = jest.fn();
  // private mockSearchByEmail = jest.fn();

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  async searchByEmail(email: UserEmail): Promise<Nullable<User>> {
    const mock = this.mockSave.mock;
    var user = null;
    mock.calls.map(savedUsers => {
      if (savedUsers[0].email.value == email.value) {
        user = savedUsers[0];
      }
    });
    return user;
  }

  async search(id: UserId): Promise<Nullable<User>> {
    const mock = this.mockSave.mock;
    var user = null;
    mock.calls.map(savedUsers => {
      if (savedUsers[0].id.value == id.value) {
        user = savedUsers[0];
      }
    });
    return user;
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as User;
    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }

  async assertSingIn(email: UserEmail, password: UserPassword): Promise<void> {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as User;
    expect(lastSavedUser).toBeInstanceOf(User);
    expect(await HashEncrypt.compare(password.value, lastSavedUser.password.value)).toEqual(true);
  }
}
