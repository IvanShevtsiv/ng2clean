import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Patient } from '../patient';
import { PatientDataService } from '../patient-data.service';
import { ValidationService } from '../../shared/validation.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit, OnDestroy {
  patientForm: FormGroup;
  patient: Patient;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private patientDataService: PatientDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      data => this.patient = data['patient'],
      error => console.log(error)
    );
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.patient.id) {
      this.patientDataService.updatePatientById(this.patient.id, this.patientForm.value);
    } else {
      this.patientDataService.addPatient(this.patientForm.value)
        .subscribe((data) => console.log(data));
    }
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/patients']);
  }

  private initForm(): void {
    if (!this.patient) {
      this.patient = new Patient();
    }
    this.patient.dateOfBirth = this.patient.dateOfBirth ? new Date(this.patient.dateOfBirth) : this.patient.dateOfBirth;
    this.patientForm = this.formBuilder.group({
      firstName: [this.patient.firstName, [Validators.required, Validators.maxLength(75)]],
      lastName: [this.patient.lastName, [Validators.required, Validators.maxLength(75)]],
      dateOfBirth: [this.patient.dateOfBirth, Validators.required],
      address: [this.patient.address, [Validators.required, Validators.maxLength(250)]],
      phone: [this.patient.phone, [Validators.required, ValidationService.phoneNumberValidator, Validators.maxLength(20)]]
    });
  }
}
