import { SpyObject } from '../helper';
import { PatientDataService } from '../../../patient/patient-data.service';
import Spy = jasmine.Spy;

export class PatientDataMockService extends SpyObject {
  addPatient: Spy;
  deletePatientById: Spy;
  updatePatientById: Spy;
  getAllPatients: Spy;
  getPatientById: Spy;
  fakeResponse: any;

  constructor() {
    super( PatientDataService );

    this.fakeResponse = null;
    this.addPatient = this.spy('addPatient').andReturn(this);
    this.deletePatientById = this.spy('deletePatientById').andReturn(this);
    this.updatePatientById = this.spy('updatePatientById').andReturn(this);
    this.getAllPatients = this.spy('getAllPatients').andReturn(this);
    this.getPatientById = this.spy('getPatientById').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
