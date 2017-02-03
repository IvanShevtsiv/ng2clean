import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';

import { SharedModule } from '../shared/shared.module';
import { Routing } from './provider.router';
import { ProviderDataService } from './provider-data.service';
import { ProviderEditComponent } from './provider-edit/provider-edit.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderResolver } from './provider.resolve';

@NgModule({
  imports: [
    AutoCompleteModule,
    Routing,
    SharedModule
  ],
  providers: [
    ProviderDataService,
    ProviderResolver
  ],
  declarations: [
    ProviderEditComponent,
    ProviderListComponent
  ]
})
export class ProviderModule { }
