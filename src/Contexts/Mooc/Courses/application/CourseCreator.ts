import { CourseRepository } from '../domain/CourseRepository';
import { CourseDuration } from '../domain/CourseDuration';
import { CourseName } from '../domain/CourseName';
import { CourseId } from '../domain/CourseId';
import { Course } from '../domain/Course';

export type CourseCreatorParams = {
  id: string;
  name: string;
  duration: string;
};

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run({ id, name, duration }: CourseCreatorParams): Promise<void> {
    const course = new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });
    return this.repository.save(course);
  }
}
