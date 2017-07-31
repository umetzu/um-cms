import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.html',
})
export class Wizard implements OnInit {

    form: FormGroup;

    // form.personalInfo: formGroup;
    // form.productInfo: formGroup;
    // form.shippingInfo: formGroup;
  
  constructor() {
  }

  ngOnInit() {
  }
}
