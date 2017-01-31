import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPersonComponent } from './edit-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import {Routing} from "./edit.router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Routing
  ],
  declarations: [EditPersonComponent]
})
export class EditPersonModule { }
