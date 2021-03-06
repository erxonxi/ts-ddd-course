import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class CourseIdMother {
  static create(value: string): CourseId {
    return new CourseId(value);
  }

  static creator() {
    return () => CourseIdMother.random();
  }

  static random(): CourseId {
    return this.create(UuidMother.random());
  }
}
