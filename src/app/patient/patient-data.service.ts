import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { ApiService } from '../api/api.service';

import { Patient } from './patient';

@Injectable()
export class PatientDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number;

  // Placeholder for todo's
  patients: Patient[];

  constructor(private http: Http, private api: ApiService) {
    this.patients = this.getAllPatients();
    this.lastId = this.patients.length ? this.patients[this.patients.length - 1].id : 0;
  }

  // Simulate POST /patients
  addPatient(patient: Patient) {
    if (!patient.id) {
      patient.id = ++this.lastId;
    }
    const body = JSON.stringify(patient);
    const headers = new Headers(this.api.apiConfig.headers);

    return this.http.post(this.api.patient(), body, {headers: headers})
      .map((res: Response) => res.json());
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

  getAllPatients(): Observable<Patient[]> {
    return this.http.get(this.api.patient())
      .map((res: Response) => res.json());
  }

  // Simulate GET /patients/:id
  getPatientById(id: number): Patient {
    console.log(this.patients);
    return this.patients.filter(patient => patient.id === id).pop();
  }

  private _updateLocalStorage() {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }
}
