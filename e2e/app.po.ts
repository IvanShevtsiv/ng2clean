import { browser, element, by } from 'protractor';

export class Ng2cleanPage {
  navigateTo() {
    return browser.get('/');
  }
}
