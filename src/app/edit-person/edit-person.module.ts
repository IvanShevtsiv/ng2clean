import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditPersonComponent } from './edit-person.component';
import { Routing } from './edit.router';
import { PersonResolver } from './person.resolve';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    PersonResolver
  ],
  declarations: [
    EditPersonComponent
  ],
})
export class EditPersonModule { }
