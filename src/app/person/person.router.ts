import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonResolver } from './person.resolve';


const routes: Route[] = [
  {
    path: '',
    component: PersonEditComponent
  },
  {
    path: ':id',
    component: PersonEditComponent,
    resolve: {
      person: PersonResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
