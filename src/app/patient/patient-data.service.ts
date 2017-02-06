import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Patient } from './patient';

@Injectable()
export class PatientDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number;

  // Placeholder for todo's
  patients: Patient[];

  constructor() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
    this.lastId = this.patients.length ? this.patients[this.patients.length - 1].id : 0;
  }

  // Simulate POST /patients
  addPatient(patient: Patient): PatientDataService {
    if (!patient.id) {
      patient.id = ++this.lastId;
    }

    this.patients.push(patient);
    this._updateLocalStorage();
    return this;
  }

  // Simulate DELETE /patients/:id
  deletePatientById(id: number): PatientDataService {
    this.patients = this.patients.filter(patient => patient.id !== id);
    this._updateLocalStorage();
    return this;
  }

  // Simulate PUT /patients/:id
  updatePatientById(id: number, values: Object = {}): Patient {
    const patient = this.getPatientById(id);
    if (!patient) {
      return null;
    }
    Object.assign(patient, values);
    this._updateLocalStorage();
    return patient;
  }

  // Simulate GET /patients
  // getAllPatients(): Observable<Patient[]> {
  //   return Observable.of(this.patients);
  //}
  getAllPatients(): Patient[] {
    return this.patients;
  }

  // Simulate GET /patients/:id
  getPatientById(id: number): Patient {
    return this.patients.filter(patient => patient.id === id).pop();
  }

  private _updateLocalStorage() {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }
}
