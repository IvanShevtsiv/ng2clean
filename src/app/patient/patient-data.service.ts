import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PatientDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  patients: Patient[] = [];

  constructor() { }

  // Simulate POST /patients
  addPatient(patient: Patient): PatientDataService {
    if (!patient.id) {
      patient.id = ++this.lastId;
    }

    this.patients.push(patient);
    return this;
  }

  // Simulate DELETE /patients/:id
  deletePatientById(id: number): PatientDataService {
    this.patients = this.patients.filter(patient => patient.id !== id);
    return this;
  }

  // Simulate PUT /patients/:id
  updatePatientById(id: number, values: Object = {}): Patient {
    const patient = this.getPatientById(id);
    if (!patient) {
      return null;
    }

    Object.assign(patient, values);
    return patient;
  }

  // Simulate GET /patients
  getAllPatients(): Observable<Patient[]> {
    return Observable.of(this.patients);
  }

  // Simulate GET /patients/:id
  getPatientById(id: number): Patient {
    return this.patients.filter(patient => patient.id === id).pop();
  }
}
