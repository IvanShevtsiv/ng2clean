import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientDataService: PatientDataService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  onRemoved(removedPatientId) {
    this.patients = this.patients.filter(patient => patient.id !== removedPatientId);
  }

  private getAllPatients() {
    this.patients = this.patientDataService.getAllPatients();
  }

}
