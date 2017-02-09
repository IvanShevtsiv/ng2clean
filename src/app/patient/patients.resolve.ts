import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Patient} from './patient';
import {PatientDataService} from './patient-data.service';

@Injectable()
export class PatientsResolver implements Resolve<Patient[]> {
  constructor(private patientDataService: PatientDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.patientDataService.getAllPatients();
  }
}
