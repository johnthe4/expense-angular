import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ExpenseLines } from '../expenselines.class';
import { ExpenselinesService } from '../expenselines.service';

@Component({
  selector: 'app-expenselines-create',
  templateUrl: './expenselines-create.component.html',
  styleUrls: ['./expenselines-create.component.css']
})
export class ExpenselinesCreateComponent implements OnInit {

  expenseLine: ExpenseLines = new ExpenseLines();
  items!: Item[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private explsvc: ExpenselinesService,
    private itemsvc: ItemService
  ) { }

  list(): void {
    this.router.navigateByUrl(`/explines/${this.expenseLine.expenseId}`);
  }

  save(): void {
    console.debug("Before: ", this.expenseLine);
    this.explsvc.create(this.expenseLine).subscribe({
      next: (res) => {
        console.debug("Expense Created");
        this.router.navigateByUrl(`/explines/${this.expenseLine.expenseId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.expenseLine.expenseId = +this.route.snapshot.params["id"];
  }

}
