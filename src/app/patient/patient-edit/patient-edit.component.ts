import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Patient } from '../patient';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit, OnDestroy {
  patientForm: FormGroup;
  patient: Patient;
  private subscription: Subscription;

  providers: string[] = [
    'Allergist',
    'Anesthesiologist',
    'Cardiologist',
    'Dentist',
    'Dermatologist',
    'Gynecologist',
    'Neurologist',
    'Oncologist',
    'Orthopedic Surgeon',
    'Plastic Surgeon',
    'Urologist'
  ];
  filteredProviders: any[];
  provider: string;

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
    this.router.navigate(['/patients']);
  }

  filterProviders(event) {
    this.filteredProviders = [];
    for (let i = 0; i < this.providers.length; i++) {
      const provider = this.providers[i];
      if (provider.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredProviders.push(provider);
      }
    }
  }

  handleDropdownClick() {
    this.filteredProviders = [];
    setTimeout(() => {
      this.filteredProviders = this.providers;
    });
  }

  private initForm(): void {
    if (!this.patient) {
      this.patient = new Patient();
    }
    this.patient.dob = this.patient.dob ? new Date(this.patient.dob) : this.patient.dob;
    this.patientForm = this.formBuilder.group({
      firstName: [this.patient.firstName, [Validators.required]],
      lastName: [this.patient.lastName, Validators.required],
      dob: [this.patient.dob, Validators.required],
      provider: [this.patient.provider, Validators.required],
      description: [this.patient.description, Validators.required],
      address: [this.patient.address, Validators.required],
      phone: [this.patient.phone, Validators.required],
      email: [this.patient.email, Validators.required]
    });
  }
}
