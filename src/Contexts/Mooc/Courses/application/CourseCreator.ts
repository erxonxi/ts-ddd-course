import { Uuid } from '../../../Shared/infrastructure/value-object/Uuid';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';

type Params = {
  id: string;
  name: string;
  duration: string;
};

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run({ id, name, duration }: Params): Promise<void> {
    const course = new Course({ id: new Uuid(id), name, duration });
    return this.repository.save(course);
  }
}
