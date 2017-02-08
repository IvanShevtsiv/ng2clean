import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routing } from './app.router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ValidationService } from './shared/validation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    CoreModule,
    SharedModule
  ],
  providers: [
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
