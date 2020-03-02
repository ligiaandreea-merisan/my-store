import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HttpClientModule } from "@angular/common/http";
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatSnackBarModule} from "@angular/material";
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { ToastComponent } from './toast/toast.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    ProductCardComponent,
    ProductPageComponent,
    CartPageComponent,
    FormPageComponent,
    SubmitPageComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
