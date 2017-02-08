import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentResolver } from './appointment.resolve';


const routes: Route[] = [
  {
    path: '',
    component: AppointmentListComponent
  },
  {
    path: '/new',
    component: AppointmentEditComponent
  },
  {
    path: ':id',
    component: AppointmentEditComponent
  },
  {
    path: ':id/edit',
    component: AppointmentEditComponent,
    resolve: {
      appointment: AppointmentResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
