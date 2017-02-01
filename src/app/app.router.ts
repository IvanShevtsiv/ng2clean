import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { loadChildren: 'app/home/home.module#HomeModule', path: 'home' },
  { loadChildren: 'app/edit-person/edit-person.module#EditPersonModule', path: 'person' }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
