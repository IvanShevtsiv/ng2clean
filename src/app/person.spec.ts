import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const firstName = 'Jhon';
    const lastName = 'Doe';

    const person = new Person({
      firstName: firstName,
      lastName: lastName
    });

    expect(person.firstName).toEqual(firstName);
    expect(person.lastName).toEqual(lastName);
  });
});
