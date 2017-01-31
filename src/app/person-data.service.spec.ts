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

  describe('#getAllPersons()', () => {
    it('should return an empty array by default', inject([PersonDataService], (service: PersonDataService): void => {
      expect(service.getAllPersons()).toEqual([]);
    }));

    it('sould return all persons', inject([PersonDataService], (service: PersonDataService): void => {
      const person1 = new Person({firstName: 'Jhon', lastName: 'Doe'});
      const person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

      service.addPerson(person1);
      service.addPerson(person2);

      expect(service.getAllPersons()).toEqual([person1, person2]);
    }));
  });

  describe('#save(person)', () => {
    it('should automatically assign an incrementing id', inject([PersonDataService], (service: PersonDataService) => {
      const person1 = new Person({firstName: 'Jhon', lastName: 'Doe'});
      const person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

      service.addPerson(person1);
      service.addPerson(person2);

      expect(service.getPersonById(1)).toEqual(person1);
      expect(service.getPersonById(2)).toEqual(person2);
    }));
  });

  describe('#deletePersonById(id)', () => {
    it('should remove person with the corresponding id', inject([PersonDataService], (service: PersonDataService) => {
      const person1 = new Person({firstName: 'Jhon', lastName: 'Doe'});
      const person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

      service.addPerson(person1);
      service.addPerson(person2);

      expect(service.getAllPersons()).toEqual([person1, person2]);

      service.deletePersonById(1);

      expect(service.getAllPersons()).toEqual([person2]);

      service.deletePersonById(2);

      expect(service.getAllPersons()).toEqual([]);
    }));

    it('should not removing anything if person with corresponding id is not found', inject([PersonDataService],
      (service: PersonDataService) => {
      const person1 = new Person({firstName: 'Jhon', lastName: 'Doe'});
      const person2 = new Person({firstName: 'Jane', lastName: 'Doe'});

      service.addPerson(person1);
      service.addPerson(person2);

      expect(service.getAllPersons()).toEqual([person1, person2]);

      service.deletePersonById(3);

      expect(service.getAllPersons()).toEqual([person1, person2]);
    }));
  });

  describe('#updatePersonById(id, values)', () => {
    it('should return person with the corresponding id and updated data', inject([PersonDataService], (service: PersonDataService) => {
      const person = new Person({firstName: 'Jhon', lastName: 'Doe'});
      const newName = 'Max';

      service.addPerson(person);

      const updatedPerson = service.updatePersonById(1, {
        firstName: newName
      });

      expect(updatedPerson.firstName).toEqual(newName);
    }));

    it('should return null if person is not found', inject([PersonDataService], (service: PersonDataService) => {
      const person: Person = new Person({firstName: 'Jhon', lastName: 'Doe'});

      service.addPerson(person);

      const updatedPerson: Person = service.updatePersonById(1, {
        firstName: 'Max'
      });

      expect(updatedPerson).toEqual(null);
    }));
  });
});
