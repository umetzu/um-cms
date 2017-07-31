import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalForm } from './personalForm.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    PersonalForm
  ]
})
export class PersonalFormModule {}
