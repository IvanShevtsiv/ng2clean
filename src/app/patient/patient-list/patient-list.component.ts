import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from '../patient';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  private subscription: Subscription;

  constructor(private patientDataService: PatientDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      data => {
        this.patients = data['patients'];
      },
      error => console.log(error)
    );
  }

  onRemoved(removedPatientId) {
    this.patients = this.patients.filter(patient => patient.id !== removedPatientId);
  }
}
