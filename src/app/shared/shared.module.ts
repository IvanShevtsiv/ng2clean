import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent
  ]
})
export class SharedModule {}
