import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseLines } from 'src/app/expenselines/expenselines.class';
import { ExpenselinesService } from 'src/app/expenselines/expenselines.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenseline-list',
  templateUrl: './expenseline-list.component.html',
  styleUrls: ['./expenseline-list.component.css']
})
export class ExpenselineListComponent implements OnInit {

  expense!: Expense;

  constructor(
    private expsrvc: ExpenseService,
    private explsrvc: ExpenselinesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  list(): void {
    this.router.navigateByUrl("/exp/list");
  }

  submit(): void {
    this.expsrvc.review(this.expense.id, this.expense).subscribe({
      next: (res) => {
        console.debug("submitted for review");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  delete(line: ExpenseLines): void {
    this.explsrvc.remove(line.id).subscribe({
      next: (res) => {
        console.debug("Expense removed");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.refresh();
  }
  
  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.expsrvc.get(id).subscribe({
      next:(res) => {
        console.debug("Expense: ", res);
        this.expense = res;
      },
      error:(err) => {console.error(err);}
    });
  }

}
