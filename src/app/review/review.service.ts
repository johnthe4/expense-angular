import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../expense/expense.class';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseurl: string = "http://localhost:5253/api/expenses";

  constructor(
    private http: HttpClient
  ) { }

  approve(id: number, exp: Expense) : Observable<Expense> {
    return this.http.put(`${this.baseurl}/Approve/${id}`, exp) as Observable<Expense>;
  }
  
  reject(id: number, exp: Expense) : Observable<Expense> {
    return this.http.put(`${this.baseurl}/Reject/${id}`, exp) as Observable<Expense>;
  }

  review() : Observable<Expense[]> {
    return this.http.get(`${this.baseurl}/AllReview`) as Observable<Expense[]>;
  }

}
