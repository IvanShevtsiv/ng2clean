import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProviderEditComponent } from './provider-edit/provider-edit.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderResolver } from './provider.resolve';

const routes: Route[] = [
  {
    path: '',
    component: ProviderListComponent
  },
  {
    path: 'new',
    component: ProviderEditComponent
  },
  {
    path: ':id',
    component: ProviderEditComponent,
    resolve: {
      provider: ProviderResolver
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
