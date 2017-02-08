import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="form-group">
      <label class="control-label" *ngIf="label !== undefined ">{{label}}</label>
      <p-autoComplete [(ngModel)]="value" [suggestions]="filteredItems" 
        (completeMethod)="filterItems($event)" (onDropdownClick)="handleDropdownClick($event)"
        [placeholder]="placeholder" [size]="30" [minLength]="1" [dropdown]="true"></p-autoComplete>
    </div>
  `,
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input('value') _value: string = '';
  @Input() placeholder: string = '';
  @Input() items: any[];
  filteredItems: any[];

  filterItems(event) {
    this.filteredItems = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredItems.push(item);
      }
    }
  }

  handleDropdownClick() {
    this.filteredItems = [];
    setTimeout(() => {
      this.filteredItems = this.items;
    });
  }

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
