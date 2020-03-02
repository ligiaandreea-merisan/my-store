import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

import { Product } from "../Interfaces";
import { products } from "../products";
import { CartService } from "../cart.service";
import {ProductsService} from "../products.service";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  itemSum(item) {
    return this.cartService.totalEachProduct(item.product);
  }

  totalSum() {
    return this.cartService.totalSum();
  }

  deleteItem(item) {
    this.items = this.cartService.deleteItemFromCart(item.product);
  }

}
