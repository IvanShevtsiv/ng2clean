import { Component, OnInit } from '@angular/core';

import { Appointment } from '../appointment';
import { AppointmentDataService } from '../appointment-data.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentDataService: AppointmentDataService) { }

  ngOnInit() {
    this.getAllAppointments();
  }

  onRemoved(removedAppointmentId) {
    this.appointments = this.appointments.filter(appointment => appointment.id !== removedAppointmentId);
  }

  private getAllAppointments() {
    this.appointments = this.appointmentDataService.getAllAppointments();
  }

}
