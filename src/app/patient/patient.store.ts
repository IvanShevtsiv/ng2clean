import { Patient } from './patient';

export interface PersonStore {
  patient: Patient[];
  selectedPatient: Patient;
}
