import {Component, Input} from '@angular/core';
import {ValidationService} from '../validation.service';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-control-error-message',
  template: `
    <span *ngIf="errorMessage !== null" class="form-control-feedback">{{errorMessage}}</span>
  `,
  styleUrls: ['./control-error-message.component.scss']
})
export class ControlErrorMessageComponent {
  @Input() control: FormControl | FormGroup | FormArray;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
