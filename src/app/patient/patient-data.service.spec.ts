import { TestBed, async, inject } from '@angular/core/testing';
import { Patient } from './patient';
import { PatientDataService } from './patient-data.service';
import { Observable } from "rxjs";

describe('PatientDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataService]
    });
  });

  it('should ...', inject([PatientDataService], (service: PatientDataService): void => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllPatients()', () => {
    it('should return an empty array by default', inject([PatientDataService], (service: PatientDataService): any => {
      //expect(service.getAllPatients()).toEqual([]);
      return service.getAllPatients().subscribe(
        res => expect(res).toEqual([])
      );
    }));

    it('should return all patients', inject([PatientDataService], (service: PatientDataService): any => {
      const patient1 = new Patient({firstName: 'Jhon', lastName: 'Doe'});
      const patient2 = new Patient({firstName: 'Jane', lastName: 'Doe'});

      service.addPatient(patient1);
      service.addPatient(patient2);

      //expect(service.getAllPatients()).toEqual([patient1, patient2]);
      return service.getAllPatients().subscribe(
        res => expect(res).toEqual([patient1, patient2])
      );
    }));
  });

  describe('#save(patient)', () => {
    it('should automatically assign an incrementing id', inject([PatientDataService], (service: PatientDataService) => {
      const patient1 = new Patient({firstName: 'Jhon', lastName: 'Doe'});
      const patient2 = new Patient({firstName: 'Jane', lastName: 'Doe'});

      service.addPatient(patient1);
      service.addPatient(patient2);

      expect(service.getPatientById(1)).toEqual(patient1);
      expect(service.getPatientById(2)).toEqual(patient2);
    }));
  });

  describe('#deletePatientById(id)', () => {
    it('should remove patient with the corresponding id', inject([PatientDataService], (service: PatientDataService) => {
      const patient1 = new Patient({firstName: 'Jhon', lastName: 'Doe'});
      const patient2 = new Patient({firstName: 'Jane', lastName: 'Doe'});

      service.addPatient(patient1);
      service.addPatient(patient2);

      service.getAllPatients().subscribe(
        res => expect(res).toEqual([patient1, patient2])
      );

      service.deletePatientById(1);

      service.getAllPatients().subscribe(
        res => expect(res).toEqual([patient2])
      );

      service.deletePatientById(2);

      service.getAllPatients().subscribe(
        res => expect(res).toEqual([])
      );
    }));

    it('should not removing anything if patient with corresponding id is not found', inject([PatientDataService],
      (service: PatientDataService) => {
      const patient1 = new Patient({firstName: 'Jhon', lastName: 'Doe'});
      const patient2 = new Patient({firstName: 'Jane', lastName: 'Doe'});

      service.addPatient(patient1);
      service.addPatient(patient2);

      service.getAllPatients().subscribe(
        res => expect(res).toEqual([patient1, patient2])
      );

      service.deletePatientById(3);

      service.getAllPatients().subscribe(
        res => expect(res).toEqual([patient1, patient2])
      );
    }));
  });

  describe('#updatePatientById(id, values)', () => {
    it('should return patient with the corresponding id and updated data', inject([PatientDataService], (service: PatientDataService) => {
      const patient = new Patient({firstName: 'Jhon', lastName: 'Doe'});
      const newName = 'Max';

      service.addPatient(patient);

      const updatedPatient = service.updatePatientById(1, {
        firstName: newName
      });

      expect(updatedPatient.firstName).toEqual(newName);
    }));

    it('should return null if patient is not found', inject([PatientDataService], (service: PatientDataService) => {
      const patient: Patient = new Patient({firstName: 'Jhon', lastName: 'Doe'});

      service.addPatient(patient);

      const updatedPatient: Patient = service.updatePatientById(2, {
        firstName: 'Max'
      });

      expect(updatedPatient).toEqual(null);
    }));
  });
});
