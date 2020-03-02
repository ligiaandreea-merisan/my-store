import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  findProductInCart(product) {
    for (let i=0; i < this.items.length; i++){
      const item = this.items[i];
      if (item.product === product)
        return i;
    }
  }

  addToCart(product) {
    const itemInCart = this.findProductInCart(product);
    if (itemInCart !== undefined) {
      this.items[itemInCart].quantity++;
    }
    else {
      this.items.push({
        product: product,
        quantity: 1
      });
    }
  }

  totalEachProduct(product) {
    const itemInCart = this.findProductInCart(product);
    return this.items[itemInCart].product.price * this.items[itemInCart].quantity;
  }

  totalSum() {
    let total = 0;
    for (let i=0; i < this.items.length; i++){
      const item = this.items[i];
      const sumProduct = this.totalEachProduct(item.product);
      total += sumProduct;
    }
    return total;
  }

  getItems() {
    return this.items;
  }


  deleteItemFromCart(product) {
    const itemInCart = this.findProductInCart(product);
    this.items = [
      ...this.items.slice(0, itemInCart),
      ...this.items.slice(itemInCart + 1, this.items.length),
    ];
    return this.items;
  }



  clearCart() {
    this.items = [];
    return this.items;
  }

}
