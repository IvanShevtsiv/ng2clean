import { Appointment } from './appointment';

export interface AppointmentStore {
  appointment: Appointment[];
  selectedPatient: Appointment;
}
