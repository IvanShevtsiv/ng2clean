import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { Routing } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Routing,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
