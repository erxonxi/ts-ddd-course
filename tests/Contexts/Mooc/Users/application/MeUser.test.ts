import { MeUser } from '../../../../../src/Contexts/Mooc/Users/application/MeUser';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';
import { UserMother } from './UserMother';

let repository: UserRepositoryMock;
let meUser: MeUser;

beforeEach(() => {
  repository = new UserRepositoryMock();
  meUser = new MeUser(repository);
});

describe('MeUser', () => {
  it('get user by id', async () => {
    // create fake user
    const user = UserMother.random();
    await repository.save(user);

    const me = await meUser.run({ id: user.id.value });
    expect(user.email.value).toEqual(me.email);
    expect(user.username.value).toEqual(me.username);
  });
});
