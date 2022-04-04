import { v4 } from 'uuid';

export class UuidMother {
  static random(): string {
    return v4();
  }
}
