export abstract class StringValueObjectMutable {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}
