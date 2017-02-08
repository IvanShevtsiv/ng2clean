import { Component } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-fort-awesome', routerLink: ['/home']},
      {label: 'Patients', icon: 'fa-reddit-alien', routerLink: ['/patients']},
      {label: 'Providers', icon: 'fa-reddit', routerLink: ['/providers']},
      {label: 'Appointments', icon: 'fa-calendar', routerLink: ['/appointments']}
    ];
  }
}
