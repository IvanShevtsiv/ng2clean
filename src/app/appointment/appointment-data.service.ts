import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Appointment } from './appointment';

@Injectable()
export class AppointmentDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number;

  // Placeholder for todo's
  appointments: Appointment[];

  constructor() {
    this.appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    this.lastId = this.appointments.length ? this.appointments[this.appointments.length - 1].id : 0;
  }

  // Simulate POST /appointments
  addAppointment(appointment: Appointment): AppointmentDataService {
    if (!appointment.id) {
      appointment.id = ++this.lastId;
    }

    this.appointments.push(appointment);
    this._updateLocalStorage();
    return this;
  }

  // Simulate DELETE /appointments/:id
  deleteAppointmentById(id: number): AppointmentDataService {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    this._updateLocalStorage();
    return this;
  }

  // Simulate PUT /appointments/:id
  updateAppointmentById(id: number, values: Object = {}): Appointment {
    const appointment = this.getAppointmentById(id);
    if (!appointment) {
      return null;
    }
    Object.assign(appointment, values);
    this._updateLocalStorage();
    return appointment;
  }

  // Simulate GET /appointments
  // getAllAppointments(): Observable<Appointment[]> {
  //   return Observable.of(this.appointments);
  // }
  getAllAppointments(): Appointment[] {
    return this.appointments;
  }

  // Simulate GET /appointments/:id
  getAppointmentById(id: number): Appointment {
    return this.appointments.filter(appointment => appointment.id === id).pop();
  }

  private _updateLocalStorage() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
