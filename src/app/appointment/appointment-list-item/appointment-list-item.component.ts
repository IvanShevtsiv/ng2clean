import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Appointment } from '../appointment';
import { AppointmentDataService } from '../appointment-data.service';

@Component({
  selector: 'app-appointment-list-item',
  templateUrl: './appointment-list-item.component.html',
  styleUrls: ['./appointment-list-item.component.scss']
})
export class AppointmentListItemComponent {

  @Input() appointment: Appointment;
  @Output() onRemoved = new EventEmitter();

  constructor(private appointmentDataService: AppointmentDataService) { }

  onRemoveAppointment(deletedAppointment) {
    this.appointmentDataService.deleteAppointmentById(deletedAppointment.id);
    this.onRemoved.emit(deletedAppointment.id);
  }

}
