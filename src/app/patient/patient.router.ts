import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientResolver } from './patient.resolve';
import { PatientsResolver } from './patients.resolve';


const routes: Route[] = [
  {
    path: '',
    component: PatientListComponent,
    resolve: {
      patients: PatientsResolver
    }
  },
  {
    path: '/new',
    component: PatientEditComponent
  },
  {
    path: ':id',
    component: PatientEditComponent
  },
  {
    path: ':id/edit',
    component: PatientEditComponent,
    resolve: {
      patient: PatientResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
