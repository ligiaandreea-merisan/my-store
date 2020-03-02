import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Product } from "../Interfaces";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  buy=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickBuy(event) {
    this.buy.emit(this.product);
    event.stopPropagation();
  }

}
