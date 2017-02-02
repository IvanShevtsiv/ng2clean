import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { loadChildren: 'app/home/home.module#HomeModule', path: 'home' },
  { loadChildren: 'app/patient/patient.module#PatientModule', path: 'patient' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
