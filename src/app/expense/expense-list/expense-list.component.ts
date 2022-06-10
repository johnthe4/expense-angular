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
  searchCriteria: string ="";
  sortColumn: string = "desc";
  sortAsc: boolean = true;

  constructor(
    private expsrvc: ExpenseService,
    private router: Router
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
  }

  create(): void {
    this.router.navigateByUrl("/exp/create")
  }
 
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
        for(let e of res) {
          e.employeeName = e.employee.name;
        }
        console.debug("Expenses: ", res);
        this.expenses = res;
      },
      error: (err) => {console.error(err);}
    });
  }

}
