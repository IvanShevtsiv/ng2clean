import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PersonDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  persons: Person[] = [];

  constructor() { }

  // Simulate POST /persons
  addPerson(person: Person): PersonDataService {
    if (!person.id) {
      person.id = ++this.lastId;
    }

    this.persons.push(person);
    return this;
  }

  // Simulate DELETE /persons/:id
  deletePersonById(id: number): PersonDataService {
    this.persons = this.persons.filter(person => person.id !== id);
    return this;
  }

  // Simulate PUT /persons/:id
  updatePersonById(id: number, values: Object = {}): Person {
    const person = this.getPersonById(id);
    if (!person) {
      return null;
    }

    Object.assign(person, values);
    return person;
  }

  // Simulate GET /persons
  getAllPersons(): Observable<Person[]> {
    return Observable.of(this.persons);
  }

  // Simulate GET /persons/:id
  getPersonById(id: number): Person {
    return this.persons.filter(person => person.id === id).pop();
  }
}
