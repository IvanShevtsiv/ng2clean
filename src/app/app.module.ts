import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonDataService } from './person-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    SharedModule
  ],
  providers: [PersonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
