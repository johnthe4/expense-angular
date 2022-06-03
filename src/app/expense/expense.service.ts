import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Expense } from './expense.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  baseurl: string = "http://localhost:5253/api/expenses";

  constructor(
    private http: HttpClient
  ) { }

  paid(id: number, exp: Expense) : Observable<any> {
    return this.http.put(`${this.baseurl}/paid/${id}`, exp) as Observable<any>;
  }

  approve(id: number, exp: Expense) : Observable<Expense> {
    return this.http.put(`${this.baseurl}/Approve/${id}`, exp) as Observable<Expense>;
  }

  reject(id: number, exp: Expense) : Observable<Expense> {
    return this.http.put(`${this.baseurl}/Reject/${id}`, exp) as Observable<Expense>;
  }

  review(id: number, exp: Expense) : Observable<Expense> {
    return this.http.put(`${this.baseurl}/Review/${id}`, exp) as Observable<Expense>;
  }

  allApproved() : Observable<Expense[]> {
    return this.http.get(`${this.baseurl}/AllApproved`) as Observable<Expense[]>;
  }


  list() : Observable<Expense[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Expense[]>;
  }

  get(id: number) : Observable<Expense> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Expense>;
  }

  change(exp: Expense) : Observable<any> {
    return this.http.put(`${this.baseurl}/${exp.id}`, exp) as Observable<any>;
  }

  create(exp: Expense) : Observable<Expense> {
    return this.http.post(`${this.baseurl}`, exp) as Observable<Expense>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
