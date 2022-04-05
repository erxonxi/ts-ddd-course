import { SingInUser } from '../../../../../src/Contexts/Mooc/Users/application/SingInUser';
import { SingUpUser } from '../../../../../src/Contexts/Mooc/Users/application/SingUpUser';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';
import { UserMother } from './UserMother';

let repository: UserRepositoryMock;
let singUp: SingUpUser;
let singIn: SingInUser;

beforeEach(() => {
  repository = new UserRepositoryMock();
  singUp = new SingUpUser(repository);
  singIn = new SingInUser(repository);
});

describe('SingInUser', () => {
  it('should create a valid User', async () => {
    // sing up
    const user = UserMother.random();
    await singUp.run(user.toPrimitives());
    repository.assertLastSavedUserIs(user);

    // sing in
    await singIn.run({ email: user.email.value, password: user.password.value });
  });
});
