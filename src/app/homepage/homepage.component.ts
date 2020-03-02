import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

import { Product } from "../Interfaces";
import {ProductsService} from "../products.service";
import { CartService } from "../cart.service";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {


  products = this.productsService.getProducts();
  id = '1';

  //@ViewChild('viewOnlyTemplate') viewOnlyTemplate: TemplateRef;

  // private  products: Observable<Product> = this.http.get<Product>(this.ROOT_URL + '/products/' + this.id);


  constructor(
    private http: HttpClient,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  addToCart(product) {
    // window.alert('Your product has been added to the cart!');
    this.toastService.show('Cart', 'Your product has been added to the cart!', 'template1');
    this.cartService.addToCart(product);
  }

}
