import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientResolver } from './patient.resolve';


const routes: Route[] = [
  {
    path: '',
    component: PatientEditComponent
  },
  {
    path: ':id',
    component: PatientEditComponent,
    resolve: {
      patient: PatientResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
