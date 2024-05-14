import { SalaryService } from './calculator.service'
import { Contractor, FulltimeEmployee, Manager } from './employee.model'

const salaryService = new SalaryService()
salaryService.calculate(new FulltimeEmployee())
salaryService.calculate(new Contractor())
salaryService.calculate(new Manager())

const formatter =
  Intl.NumberFormat &&
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

const totalPayroll =
  (formatter && formatter.format(salaryService.getTotal())) ||
  salaryService.getTotal()

console.log('Total payroll is: ', totalPayroll)
