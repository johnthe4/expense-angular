import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee!: Employee;
  showVerify: boolean = false;

  constructor(
    private emplsrvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/empl/list");
  }

  remove(): void {
    this.showVerify = !this.showVerify;
  }
  verify(): void {
    this.emplsrvc.remove(this.employee.id).subscribe({
      next: (res) => {
        console.debug("Employee removed");
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    // params is dictionary of parameters on url
    let id: number = +this.route.snapshot.params["id"];
    this.emplsrvc.get(id).subscribe({
      next:(res) => {
        console.debug("Employee: ", res);
        this.employee = res;
      },
      error:(err) => {console.error(err);}
    });
  }
}
