import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Course } from '../../domain/Course';
import { CourseId } from '../../domain/CourseId';
import { CourseRepository } from '../../domain/CourseRepository';

export interface CourseDocument {
  _id: string;
  name: string;
  duration: string;
}

export class MongoCourseRepository extends MongoRepository<Course> implements CourseRepository {
  public save(course: Course): Promise<void> {
    return this.persist(course.id.value, course);
  }

  public async search(id: CourseId): Promise<Nullable<Course>> {
    const collection = await this.collection();
    const document = await collection.findOne<CourseDocument>({ _id: id.value });

    return document ? Course.fromPrimitives({ ...document, id: id.value }) : null;
  }

  protected moduleName(): string {
    return 'courses';
  }
}
