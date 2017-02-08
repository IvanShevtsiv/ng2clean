import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Appointment } from '../appointment';
import { AppointmentDataService } from '../appointment-data.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.scss']
})
export class AppointmentEditComponent implements OnInit, OnDestroy {
  appointmentForm: FormGroup;
  appointment: Appointment;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private appointmentDataService: AppointmentDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      data => this.appointment = data['appointment'],
      error => console.log(error)
    );
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.appointment.id) {
      this.appointmentDataService.updateAppointmentById(this.appointment.id, this.appointmentForm.value);
    } else {
      this.appointmentDataService.addAppointment(this.appointmentForm.value);
    }
    this.router.navigate(['/appointments']);
  }

  private initForm(): void {
    if (!this.appointment) {
      this.appointment = new Appointment();
    }
    this.appointment.startDate = this.appointment.startDate ? new Date(this.appointment.startDate) : this.appointment.startDate;
    this.appointment.endDate = this.appointment.endDate ? new Date(this.appointment.endDate) : this.appointment.endDate;
    this.appointmentForm = this.formBuilder.group({
      startDate: [this.appointment.startDate, Validators.required],
      endDate: [this.appointment.endDate, Validators.required],
      description: [this.appointment.description, Validators.required]
    });
  }
}
