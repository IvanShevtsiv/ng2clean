import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AutoCompleteModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListItemComponent } from './patient-list-item/patient-list-item.component';
import { PatientDataService } from './patient-data.service';
import { PatientResolver } from './patient.resolve';
import { patients } from './reducers/patients.reducer';
import { Routing } from './patient.router';
import { SharedModule } from '../shared/shared.module';
import { selectedPatient } from './reducers/selected-patient.reducer';

@NgModule({
  imports: [
    AutoCompleteModule,
    CalendarModule,
    Routing,
    SharedModule,
    StoreModule.provideStore({patients, selectedPatient}),
  ],
  providers: [
    PatientDataService,
    PatientResolver
  ],
  declarations: [
    PatientEditComponent,
    PatientListComponent,
    PatientListItemComponent
  ],
})
export class PatientModule { }
