import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Provider } from './provider';

@Injectable()
export class ProviderDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  patients: Provider[] = [];

  constructor() { }

  // Simulate POST /patients
  addProvider(patient: Provider): ProviderDataService {
    if (!patient.id) {
      patient.id = ++this.lastId;
    }

    this.patients.push(patient);
    return this;
  }

  // Simulate DELETE /patients/:id
  deleteProviderById(id: number): ProviderDataService {
    this.patients = this.patients.filter(patient => patient.id !== id);
    return this;
  }

  // Simulate PUT /patients/:id
  updateProviderById(id: number, values: Object = {}): Provider {
    const provider = this.getProviderById(id);
    if (!provider) {
      return null;
    }

    Object.assign(provider, values);
    return provider;
  }

  // Simulate GET /patients
  getAllProviders(): Provider[] {
    return this.patients;
  }

  // Simulate GET /patients/:id
  getProviderById(id: number): Provider {
    return this.patients.filter(patient => patient.id === id).pop();
  }
}
