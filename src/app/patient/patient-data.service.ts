import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Patient } from './patient';

@Injectable()
export class PatientDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number;

  // Placeholder for todo's
  patients: Patient[];

  constructor(private http: Http) {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
    this.lastId = this.patients.length ? this.patients[this.patients.length - 1].id : 0;
  }

  // Simulate POST /patients
  addPatient(patient: Patient) {
    if (!patient.id) {
      patient.id = ++this.lastId;
    }
    const body = JSON.stringify(patient);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log(body);
    return this.http.post('http://192.168.241.221:3080/api/Patient', body, {headers: headers})
      .map((data: Response) => {
        console.log(data);
        return data.json();
      });
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

  getAllPatients(): Observable<any> {
    return this.http.get('http://192.168.241.221:3080/api/Patient')
      .map(data => data.json());
  }

  // Simulate GET /patients/:id
  getPatientById(id: number): Patient {
    return this.patients.filter(patient => patient.id === id).pop();
  }

  private _updateLocalStorage() {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }
}
