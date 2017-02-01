import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Person} from '../person';
import {PersonDataService} from '../person-data.service';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private personDataService: PersonDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.personDataService.getPersonById(parseInt(route.params['id'], 10));
  }
}
