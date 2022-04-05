import { SingUpUser } from '../../../../../src/Contexts/Mooc/Users/application/SingUpUser';
import { UserUsernameLengthExceeded } from '../../../../../src/Contexts/Mooc/Users/domain/UserUsernameLengthExceeded';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';
import { UserMother } from './UserMother';
import { SingUpUserRequestMother } from './SingUpUserRequestMother';

let repository: UserRepositoryMock;
let creator: SingUpUser;

beforeEach(() => {
  repository = new UserRepositoryMock();
  creator = new SingUpUser(repository);
});

describe('SingUpUser', () => {
  it('should sing in valid User', async () => {
    const request = SingUpUserRequestMother.random();

    const user = UserMother.fromRequest(request);

    await creator.run(request);
    repository.assertLastSavedUserIs(user);
  });

  it('throw error a invalid User', async () => {
    expect(() => {
      const request = SingUpUserRequestMother.invalidRequest();

      const user = UserMother.fromRequest(request);

      repository.assertLastSavedUserIs(user);
    }).toThrow(UserUsernameLengthExceeded);
  });
});
