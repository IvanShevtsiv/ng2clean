import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EditPersonComponent } from './edit-person.component';
import { PersonResolver } from './person.resolve';


const routes: Route[] = [
  {
    path: '',
    component: EditPersonComponent
  },
  {
    path: ':id',
    component: EditPersonComponent,
    resolve: {
      person: PersonResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
