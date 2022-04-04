import { CourseCreatorParams } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseIdMother } from '../domain/CourseIdMother';
import { CourseNameMother } from '../domain/CourseNameMother';
import { CourseDurationMother } from '../domain/CourseDurationMother';

export class CreateCourseRequestMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration) {
    return { id: id.value, name: name.value, duration: duration.value };
  }

  static random(): CourseCreatorParams {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static invalidRequest(): CourseCreatorParams {
    return {
      id: CourseIdMother.random().value,
      name: CourseNameMother.invalidName(),
      duration: CourseDurationMother.random().value
    };
  }
}
