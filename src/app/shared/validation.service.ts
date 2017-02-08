import { Injectable } from '@angular/core';
import { FormControl} from '@angular/forms';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const messages = {
      'required': 'Field is required',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'maxlength': `Maximum length ${validatorValue.requiredLength}`,
      'invalidEmail': 'Invalid email',
      'invalidPhoneNumber': 'Example: (xxx) xxx-xxxx'
    };
    return messages[validatorName];
  }

  static emailValidator(control: FormControl) {
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value && EMAIL_REGEXP.test(control.value)) {
      return null;
    } else {
      return { 'invalidEmail': true };
    }
  }

  static phoneNumberValidator(control: FormControl) {
    // 18005551234
    // 1 800 555 1234
    // +1 800 555-1234
    // +86 800 555 1234
    // 1-800-555-1234
    // 1 (800) 555-1234
    // (800)555-1234
    // (800) 555-1234
    // (800)5551234
    // 800-555-1234
    // 8005551234 x5678
    // 1    800    555-1234
    // 1----800----555-1234
    const PASSWORD_REGEXP = /^(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *(\d+))?$/;
    if (control.value && PASSWORD_REGEXP.test(control.value)) {
      return null;
    } else {
      return { 'invalidPhoneNumber': true };
    }
  }
}
