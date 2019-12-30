import { Employee } from "./employee.model";

export class SalaryService {
  private total = 0;

  calculate(employee: Employee) {
    this.total += employee.getSalary();
  }

  getTotal(): number {
    return this.total;
  }
}
