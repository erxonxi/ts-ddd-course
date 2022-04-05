import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from './UserId';
import { UserEmail } from './UserEmail';
import { UserUsername } from './UserUsername';
import { UserPassword } from './UserPassword';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly username: UserUsername;
  readonly email: UserEmail;
  readonly password: UserPassword;

  constructor({
    id,
    username,
    email,
    password
  }: {
    id: UserId;
    username: UserUsername;
    email: UserEmail;
    password: UserPassword;
  }) {
    super();
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static fromPrimitives(plainData: { id: string; username: string; email: string; password: string }): User {
    return new User({
      id: new UserId(plainData.id),
      username: new UserUsername(plainData.username),
      email: new UserEmail(plainData.email),
      password: new UserPassword(plainData.password)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    };
  }
}
