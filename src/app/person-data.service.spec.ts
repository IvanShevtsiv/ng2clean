/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

describe('PersonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonDataService]
    });
  });

  it('should ...', inject([PersonDataService], (service: PersonDataService): void => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllPersons()', ()=> {
    it('should return an empty array by default', inject([PersonDataService], (service: PersonDataService): void => {
      expect(service.getAllPersons()).toEqual([]);
    }));

    it('sould return all persons', inject([PersonDataService], (service: PersonDataService): void => {
      let person1 = new Person({firstName: 'Jhon', lastName: 'Doe'});
      let person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

      service.addPerson(person1);
      service.addPerson(person2);

      expect(service.getAllPersons()).toEqual([person1, person2]);
    }));
  });


});
