import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { TenantId } from './TenantId';
import { TenantName } from './TenantName';

export class Tenant extends AggregateRoot {
  readonly id: TenantId;
  readonly name: TenantName;

  constructor({ id, name }: { id: TenantId; name: TenantName }) {
    super();
    this.id = id;
    this.name = name;
  }

  static fromPrimitives(plainData: { id: string; name: string }): Tenant {
    return new Tenant({
      id: new TenantId(plainData.id),
      name: new TenantName(plainData.name)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value
    };
  }
}
