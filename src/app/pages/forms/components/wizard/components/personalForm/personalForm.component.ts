import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../../../theme/validators';

@Component({
  selector: 'personal-form',
  templateUrl: './personalForm.html',
})
  
export class PersonalForm {

  form: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  repeatPassword: AbstractControl;
  passwords: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') } )
    });

    this.username = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  onSubmit(values: Object): void {
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
