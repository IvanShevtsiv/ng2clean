import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Appointment} from './appointment';
import {AppointmentDataService} from './appointment-data.service';

@Injectable()
export class AppointmentResolver implements Resolve<Appointment> {
  constructor(private appointmentDataService: AppointmentDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.appointmentDataService.getAppointmentById(parseInt(route.params['id'], 10));
  }
}
