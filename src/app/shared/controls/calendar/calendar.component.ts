import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="form-group">
      <label class="control-label" *ngIf="label !== undefined ">{{label}}</label>
      <p-calendar [(ngModel)]="value" [placeholder]="placeholder" [showIcon]="true"></p-calendar>
    </div>
  `,
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input('value') _value: string = '';
  @Input() placeholder: string = '';

  private onChange: any = () => { };
  private onTouched: any = () => { };

  get value(): any {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor() {}

  writeValue(value: any) {
    if (value !== undefined || value !== null) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
