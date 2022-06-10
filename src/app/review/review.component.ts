import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense/expense.class';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  expenses!: Expense[];

  constructor(
    private revsrvc: ReviewService
  ) { }

  ngOnInit(): void {
    this.allReview();
  }

  allReview(): void {
    this.revsrvc.review().subscribe({
      next:(res) =>{
        console.debug("Expenses: ", res);
        this.expenses = res;
      },
      error: (err) => {console.error(err);}
    })
  }

  approve(id: number, exp: Expense): void {
    this.revsrvc.approve(id, exp).subscribe({
      next: (res) => {
        console.debug(res);
        this.allReview();
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  reject(id: number, exp: Expense): void {
    this.revsrvc.reject(id, exp).subscribe({
      next: (res) => {
        console.debug(res);
        this.allReview();
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

}
