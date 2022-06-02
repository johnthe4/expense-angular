import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl: string = "http://localhost:5253/api/employees";

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<Employee> {
    return this.http.get(`${this.baseurl}/Login/${email}/${password}`) as Observable<Employee>;
  }

  // Observable is an async call
  list() : Observable<Employee[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Employee[]>;
  }

  get(id: number) : Observable<Employee> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Employee>;
  }

  create(empl: Employee) : Observable<Employee> {
    return this.http.post(`${this.baseurl}`, empl) as Observable<Employee>;
  }
  
  change(empl: Employee) : Observable<any> {
    return this.http.put(`${this.baseurl}/${empl.id}`, empl) as Observable<any>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
