import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  login(): void {
    this.emplsvc.login(this.email, this.password).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
        this.message = "Email or password is invalid!";
      }
    });
  }

  ngOnInit(): void {
  }

}
