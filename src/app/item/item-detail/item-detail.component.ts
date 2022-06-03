import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  showVerify: boolean = false;

  constructor(
    private itemsrvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/item/list");
  }

  remove(): void {
    this.showVerify = !this.showVerify;
  }
  verify(): void {
    this.itemsrvc.remove(this.item.id).subscribe({
      next: (res) => {
        console.debug("Item removed");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    // params is dictionary of parameters on url
    let id: number = +this.route.snapshot.params["id"];
    this.itemsrvc.get(id).subscribe({
      next:(res) => {
        console.debug("Employee: ", res);
        this.item = res;
      },
      error:(err) => {console.error(err);}
    });
  }

}
