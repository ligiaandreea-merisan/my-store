import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../Interfaces";

import { products } from "../products";
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.product = productsService.getProduct(params.get("productId")); // iau id-ul din service
    });
  }

  ngOnInit() {
  }

}
