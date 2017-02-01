import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonEditComponent } from './person-edit/person-edit.component';
import { Routing } from './person.router';
import { PersonDataService } from './person-data.service';
import { PersonResolver } from './person.resolve';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    PersonDataService,
    PersonResolver
  ],
  declarations: [
    PersonEditComponent
  ],
})
export class PersonModule { }