import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <div class="form-group">
      <label class="control-label" *ngIf="label !== undefined ">{{label}}</label>
      <textarea class="form-control" [(ngModel)]="value" [placeholder]="placeholder"></textarea>
    </div>
  `,
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
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
