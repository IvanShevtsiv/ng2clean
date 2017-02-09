import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ApiService } from '../api/api.service';

import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListItemComponent } from './patient-list-item/patient-list-item.component';
import { PatientDataService } from './patient-data.service';
import { PatientResolver } from './patient.resolve';
import { PatientsResolver } from './patients.resolve';
import { patients } from './reducers/patients.reducer';
import { Routing } from './patient.router';
import { SharedModule } from '../shared/shared.module';
import { selectedPatient } from './reducers/selected-patient.reducer';

@NgModule({
  imports: [
    Routing,
    SharedModule,
    StoreModule.provideStore({patients, selectedPatient}),
  ],
  providers: [
    ApiService,
    PatientDataService,
    PatientResolver,
    PatientsResolver
  ],
  declarations: [
    PatientEditComponent,
    PatientListComponent,
    PatientListItemComponent
  ],
})
export class PatientModule { }
