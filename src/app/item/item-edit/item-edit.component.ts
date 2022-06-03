import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  item!: Item;

  constructor(
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("Before: ",this.item);
    this.itemsvc.change(this.item).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  list(): void {
    this.router.navigateByUrl("/item/list");
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.itemsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Item: ", res);
        this.item = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
