import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';

import { AutocompleteComponent } from './controls/autocomplete/autocomplete.component';
import { CalendarComponent } from './controls/calendar/calendar.component';
import { InputTextComponent } from './controls/input-text/input-text.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { ControlErrorMessageComponent } from './control-error-message/control-error-message.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    CalendarComponent,
    ControlErrorMessageComponent,
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
    AutocompleteComponent,
    CalendarComponent,
    ControlErrorMessageComponent,
    InputTextComponent,
    TextareaComponent
  ]
})
export class SharedModule {}
