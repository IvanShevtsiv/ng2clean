import {Component, Input, forwardRef, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  template: `
    <div class="form-group">
      <label class="control-label" *ngIf="label !== undefined ">{{label}}</label>
      <input class="form-control" [type]="type" [placeholder]="placeholder" [(ngModel)]="value"/>
    </div>
  `,
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label;
  @Input('value') _value = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  private inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image',
    'month', 'number', 'password', 'radio', 'range', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
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

  ngOnInit() {
    if (this.inputTypes.indexOf(this.type) === -1) {
      this.type = 'text';
    }
  }

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
