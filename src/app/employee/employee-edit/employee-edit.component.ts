import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee!: Employee;

  constructor(
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  save(): void {
    console.debug("Before: ",this.employee);
    this.emplsvc.change(this.employee).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  list(): void {
    this.router.navigateByUrl("/empl/list");
  }


  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.emplsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Employee: ", res);
        this.employee = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
