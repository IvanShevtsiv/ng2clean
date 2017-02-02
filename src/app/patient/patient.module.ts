import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';

import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { Routing } from './patient.router';
import { PatientDataService } from './patient-data.service';
import { PatientResolver } from './patient.resolve';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Routing,
    CalendarModule,
    AutoCompleteModule
  ],
  providers: [
    PatientDataService,
    PatientResolver
  ],
  declarations: [
    PatientEditComponent
  ],
})
export class PatientModule { }
