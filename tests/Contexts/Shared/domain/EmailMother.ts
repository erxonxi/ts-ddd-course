import { MotherCreator } from './MotherCreator';

export class EmailMother {
  static random(): string {
    return MotherCreator.random().lorem.word() + '@' + MotherCreator.random().lorem.word() + '.com';
  }
}
