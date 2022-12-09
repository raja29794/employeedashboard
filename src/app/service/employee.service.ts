import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList: Employee[] = [{
    id: 1,
    name: 'Rajapriyan pandian',
    dob: new Date('09/18/1993'),
    email: 'rajapriyan29794@gmail.com',
    designation: 'manager',
    team:'software',
    gender: 'Male',
    mobile: '9092309519',
    isActive: true,
    range: [0, 10],
    employeeType: 'Admin'
}];

  constructor() { }

  getEmployees() {
    return this.employeeList
}
getEmployeesByID(id: number) {
    return this.employeeList.find(x => x.id == id)
}
addEmployee(employee: Employee) {
    employee.id = new Date().getTime();
    this.employeeList.push(employee);
}
updateEmployee(employee: Employee) {
    const employeeIndex = this.employeeList.findIndex(x => x.id == employee.id);
    if (employeeIndex != null && employeeIndex != undefined) {
        this.employeeList[employeeIndex] = employee;
    }
}
removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter(x => x.id != id);
}

}
