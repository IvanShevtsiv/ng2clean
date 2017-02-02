import { Patient } from './patient';

describe('Patient', () => {
  it('should create an instance', () => {
    expect(new Patient()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const firstName = 'Jhon';
    const lastName = 'Doe';

    const patient = new Patient({
      firstName: firstName,
      lastName: lastName
    });

    expect(patient.firstName).toEqual(firstName);
    expect(patient.lastName).toEqual(lastName);
  });
});
