interface Comparable<T> {
  compareTo(another: T): number
}

export class Person implements Comparable<Person> {
  private age: number

  constructor(age: number) {
    this.age = age
  }

  compareTo(anotherPerson: Person): number {
    return this.age - anotherPerson.age
  }
}
