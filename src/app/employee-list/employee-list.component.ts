import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeList: Employee[] = [];
  first = 0;
  rows = 10;

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
      // Get Employees from employeeService
      this.employeeList = this.employeeService.getEmployees();
  }
  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
      this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.employeeList ? this.first === (this.employeeList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.employeeList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */
  // ********************User To Remove User from User List*************************/
  remove(id: number) {
      this.employeeService.removeEmployee(id);
      this.employeeList = this.employeeService.getEmployees();
  }


}
