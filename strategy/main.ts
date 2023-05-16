import { SalaryService } from './calculator.service';
import { Contractor, FulltimeEmployee, Manager } from './employee.model';

const salaryService = new SalaryService();
salaryService.calculate(new FulltimeEmployee());
salaryService.calculate(new Contractor());
salaryService.calculate(new Manager());

console.log('Total: ', salaryService.getTotal());
