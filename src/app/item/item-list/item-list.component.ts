import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items!: Item[];

  constructor(
    private itemsrvc: ItemService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/item/create")
  }

  ngOnInit(): void {
    this.itemsrvc.list().subscribe({
      next:(res) =>{
        console.debug("Items: ", res);
        this.items = res;
      },
      error: (err) => {console.error(err);}
    });
  }

}
