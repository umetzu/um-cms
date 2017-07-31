import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'shipping-form',
    templateUrl: './shippingForm.html',
})

export class ShippingForm {
 form: FormGroup;
 productName: AbstractControl;
 productId: AbstractControl;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      'productName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'productId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.productName = this.form.controls['productName'];
    this.productId = this.form.controls['productId'];
  }

  onSubmit(values: Object): void {
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}