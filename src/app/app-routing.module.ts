import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from "./homepage/homepage.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {SubmitPageComponent} from "./submit-page/submit-page.component";


const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'products/:productId', component: ProductPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'cart/form', component: FormPageComponent},
  {path: 'cart/form/submit', component: SubmitPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
