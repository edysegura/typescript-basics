import { SalaryService } from './calculator.service';
import { Contractor, FulltimeEmployeer, Manager } from './employee.model';

const salaryService = new SalaryService();
salaryService.calculate(new FulltimeEmployeer());
salaryService.calculate(new Contractor());
salaryService.calculate(new Manager());

console.log('Total: ', salaryService.getTotal());
