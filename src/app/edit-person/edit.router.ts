import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {EditPersonComponent} from './edit-person.component';


const routes: Route[] = [
  {
    path: '',
    component: EditPersonComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
