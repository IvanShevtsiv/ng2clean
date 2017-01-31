import {Person} from './person';

describe('Person', () => {
  it('should create an instance', () => {   
    expect(new Person()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let firstName = 'Jhon';
    let lastName = 'Doe';

    let person = new Person({
      firstName: firstName,
      lastName: lastName
    });
    
    expect(person.firstName).toEqual(firstName);
    expect(person.lastName).toEqual(lastName);
  });
});
