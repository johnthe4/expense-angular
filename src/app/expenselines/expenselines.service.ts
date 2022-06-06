import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseLines } from './expenselines.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenselinesService {

  baseurl: string = "http://localhost:5253/api/expenselines";

  constructor(
    private http: HttpClient
  ) { }

  get(id: number) : Observable<ExpenseLines> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<ExpenseLines>;
  }

  change(exp: ExpenseLines) : Observable<any> {
    return this.http.put(`${this.baseurl}/${exp.id}`, exp) as Observable<any>;
  }

  create(exp: ExpenseLines) : Observable<ExpenseLines> {
    return this.http.post(`${this.baseurl}`, exp) as Observable<ExpenseLines>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
