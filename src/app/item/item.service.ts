import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseurl: string = "http://localhost:5253/api/items";

  constructor(
    private http: HttpClient
  ) { }


  list() : Observable<Item[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Item[]>;
  }

  get(id: number) : Observable<Item> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Item>;
  }

  change(exp: Item) : Observable<any> {
    return this.http.put(`${this.baseurl}/${exp.id}`, exp) as Observable<any>;
  }

  create(exp: Item) : Observable<Item> {
    return this.http.post(`${this.baseurl}`, exp) as Observable<Item>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
