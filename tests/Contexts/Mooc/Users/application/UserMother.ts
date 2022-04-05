import { SingUpUserParams } from '../../../../../src/Contexts/Mooc/Users/application/SingUpUser';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';
import { UserUsername } from '../../../../../src/Contexts/Mooc/Users/domain/UserUsername';
import { UserEmail } from '../../../../../src/Contexts/Mooc/Users/domain/UserEmail';
import { UserPassword } from '../../../../../src/Contexts/Mooc/Users/domain/UserPassword';
import { UserIdMother } from '../domain/UserIdMother';
import { UserPasswordMother } from '../domain/UserPasswordMother';
import { UserUsernameMother } from '../domain/UserUsernameMother';
import { UserEmailMother } from '../domain/UserEmailMother';

export class UserMother {
  static random() {
    return new User({
      id: UserIdMother.random(),
      username: UserUsernameMother.random(),
      email: UserEmailMother.random(),
      password: UserPasswordMother.random()
    });
  }

  static fromRequest(request: SingUpUserParams) {
    return new User({
      id: new UserId(request.id),
      username: new UserUsername(request.username),
      email: new UserEmail(request.email),
      password: new UserPassword(request.password)
    });
  }
}
