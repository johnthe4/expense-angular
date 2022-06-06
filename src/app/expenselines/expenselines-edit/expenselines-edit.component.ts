import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ExpenseLines } from '../expenselines.class';
import { ExpenselinesService } from '../expenselines.service';

@Component({
  selector: 'app-expenselines-edit',
  templateUrl: './expenselines-edit.component.html',
  styleUrls: ['./expenselines-edit.component.css']
})
export class ExpenselinesEditComponent implements OnInit {

  expenseLine!: ExpenseLines;
  items!: Item[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private explsvc: ExpenselinesService,
    private itsvc: ItemService
  ) { }

  save(): void {
    console.debug("Before: ", this.expenseLine);
    this.explsvc.change(this.expenseLine).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl(`/explines/${this.expenseLine.expenseId}`);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  list(): void {
    this.router.navigateByUrl(`/explines/${this.expenseLine.expenseId}`);
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.explsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Expense: ", res);
        this.expenseLine = res;
      },
      error: (err) => {
        console.debug(err);
      }
    });

    this.itsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
