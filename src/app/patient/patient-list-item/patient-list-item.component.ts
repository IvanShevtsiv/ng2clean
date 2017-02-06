import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Patient } from '../patient';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-list-item',
  templateUrl: './patient-list-item.component.html',
  styleUrls: ['./patient-list-item.component.scss']
})
export class PatientListItemComponent {

  @Input() patient: Patient;
  @Output() onRemoved = new EventEmitter();

  constructor(private patientDataService: PatientDataService) { }

  onRemovePatient(deletedPatient) {
    this.patientDataService.deletePatientById(deletedPatient.id);
    this.onRemoved.emit(deletedPatient.id);
  }

}
