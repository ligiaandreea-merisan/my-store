import { Injectable } from '@angular/core';

import { products } from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return products;
  }

  getProduct(id) {
    const product = products.filter(product => product.id === id);
    if (!product.length) {
      return;
    }
    return product[0];
  }
}
