import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { CalendarComponent } from './controls/calendar/calendar.component';
import { InputTextComponent } from './controls/input-text/input-text.component';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TextareaComponent } from './controls/textarea/textarea.component';

@NgModule({
  declarations: [
    CalendarComponent,
    InputTextComponent,
    TextareaComponent
  ],
  imports: [
    AutoCompleteModule,
    CalendarModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  exports: [
    AutoCompleteModule,
    CalendarModule,
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CalendarComponent,
    InputTextComponent,
    TextareaComponent
  ]
})
export class SharedModule {}
