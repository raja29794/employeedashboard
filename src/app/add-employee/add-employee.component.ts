import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {


  id: number = 0;
  employeeform: FormGroup;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    //**************Create Reactive Form with validation********************* */
    this.employeeform = this.fb.group({
      name: ['', [Validators.required]],
      designation:['',[Validators.required]],
      team:['',[Validators.required]],
      mobile: ['', []],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
      isActive: [true],
      range: [[0, 10]],
      employeeType: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    //**************Get User ID On Edit********************* */
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.employeeform.get('Id')?.setValue(params['id']);
        const data = this.employeeService.getEmployeesByID(this.id);
        if (data) {
          this.employeeform.setValue(data);
        }
      }
    });
  }

  save() {
    if (this.employeeform.invalid) // true if any form validation fail
      return

    if (this.employeeform.get('id')?.value === 0) {
      // on Create New User
      this.employeeService.addEmployee(this.employeeform.value);
    } else {
      // on Update User info
      this.employeeService.updateEmployee(this.employeeform.value);
    }

    //Redirecting to user List page after save or update
    this.router.navigate(['/employee']);
  }


}
