import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  template: `
    <div class="form-group">
      <label class="control-label" *ngIf="label !== undefined ">{{label}}</label>
      <input class="form-control" type="text" pInputText [(ngModel)]="value" [placeholder]="placeholder"/>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor {
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
