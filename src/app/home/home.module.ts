import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Routing } from './home.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    Routing
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
