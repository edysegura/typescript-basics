import { Person } from "./person.model";

const firstPerson = new Person(15);
const secondPerson = new Person(36);

console.log(firstPerson.compareTo(secondPerson));
console.log(secondPerson.compareTo(firstPerson));