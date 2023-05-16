export interface Employee {
  getSalary(): number;
}

export class Contractor implements Employee {
  getSalary(): number {
    return 2000;
  }
}

export class FulltimeEmployee implements Employee {
  getSalary(): number {
    return 1000;
  }
}

export class Manager implements Employee {
  getSalary(): number {
    return 5000;
  }
}
