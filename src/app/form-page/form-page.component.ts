import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";



@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html'
})
export class FormPageComponent implements OnInit {

  items;
  public formErrors = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    check: ''
  };


  constructor(
    private cartService: CartService,
    public form: FormBuilder,
    public snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // $(function () {
    //   (<any>$('[data-toggle="tooltip"]')).tooltip();
    // })
  }


  checkoutForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    // email: new FormControl('', [Validators.required, Validators.pattern('^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$'), Validators.minLength(7)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(7)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    address2: new FormControl('', [Validators.minLength(10), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9+]{1}[0-9. ]*[0-9]{1}$'), Validators.minLength(10), Validators.maxLength(10)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    state: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    zip: new FormControl('', [Validators.required, Validators.pattern(/\d{6}/gi)]),
    check: new FormControl('', [Validators.required])
  });


  validationMessages = {
    'firstName': [
      { type: 'required', message: 'Firstname is required' },
      { type: 'minlength', message: 'Firstname must be at least 3 characters long' },
      { type: 'maxlength', message: 'Firstname cannot be more than 15 characters long' }
    ],
    'lastName': [
      { type: 'required', message: 'Lastname is required' },
      { type: 'minlength', message: 'Lastname must be at least 3 characters long' },
      { type: 'maxlength', message: 'Lastname cannot be more than 15 characters long' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'minlength', message: 'Email must be at least 7 characters long' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'address': [
      { type: 'required', message: 'Address is required' },
      { type: 'minlength', message: 'Address must be at least 10 characters long' },
      { type: 'maxlength', message: 'Address cannot be more than 30 characters long' }
    ],
    'address2': [
      { type: 'minlength', message: 'Address must be at least 10 characters long' },
      { type: 'maxlength', message: 'Address cannot be more than 30 characters long' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minlength', message: 'Phone must be at least 8 characters long' },
      { type: 'maxlength', message: 'Phone number cannot be more than 10 characters long' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ],
    'city': [
      { type: 'required', message: 'City is required' },
      { type: 'minlength', message: 'City must be at least 3 characters long' },
      { type: 'maxlength', message: 'City cannot be more than 15 characters long' }
    ],
    'state': [
      { type: 'required', message: 'State is required' },
      { type: 'minlength', message: 'State must be at least 3 characters long' },
      { type: 'maxlength', message: 'State cannot be more than 15 characters long' }
    ],
    'zip': [
      { type: 'required', message: 'Zip code is required' },
      { type: 'pattern', message: 'Enter a valid zip code' }
    ],
    'check': [
      { type: 'required', message: 'You must agree before submitting'}
    ]
  };



  markFormGroupTouched(formGroup: FormGroup) {
    formGroup.markAllAsTouched();
  }


  submitted = false;
  onSubmit() {
    // console.warn(this.profileForm.value);

    // console.warn('Your order has been submitted');
    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();


    // this.submitted = true;
    // this.markFormGroupTouched(this.checkoutForm);
    //
    // if (this.checkoutForm.valid) {
    //   this.snackbar.open('Your order has been submitted!', 'Close', {
    //     duration: 5000,
    //   });
    //   this.items = this.cartService.clearCart();
    //   this.checkoutForm.reset();
    // }
    // else {
    //
    // }



    this.submitted = true;
    this.markFormGroupTouched(this.checkoutForm);

    if (this.checkoutForm.valid) {
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();

      this.router.navigate(['/cart/form/submit']);

    }



  }

}
