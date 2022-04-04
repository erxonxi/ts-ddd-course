import { CourseCreatorParams } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseIdMother } from '../domain/CourseIdMother';
import { CourseNameMother } from '../domain/CourseNameMother';
import { CourseDurationMother } from '../domain/CourseDurationMother';

export class CourseMother {
  static random() {
    return new Course({
      id: CourseIdMother.random(),
      name: CourseNameMother.random(),
      duration: CourseDurationMother.random()
    });
  }

  static fromRequest(request: CourseCreatorParams) {
    return new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });
  }
}
