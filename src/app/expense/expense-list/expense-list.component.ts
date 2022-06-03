import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses!: Expense[];

  constructor(
    private expsrvc: ExpenseService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/exp/create")
  }
 
  // NOT WORKING 
  allApproved(): void {
    this.expsrvc.allApproved().subscribe({
      next:(res) =>{
        console.debug("Expenses: ", res);
        this.expenses = res;
      },
      error: (err) => {console.error(err);}
    })
  }

  viewAll(): void {
    this.expsrvc.list().subscribe({
      next:(res) =>{
        console.debug("Expenses: ", res);
        this.expenses = res;
      },
      error: (err) => {console.error(err);}
    });
  }

  ngOnInit(): void {
    this.expsrvc.list().subscribe({
      next:(res) =>{
        console.debug("Expenses: ", res);
        this.expenses = res;
      },
      error: (err) => {console.error(err);}
    });
  }

}
