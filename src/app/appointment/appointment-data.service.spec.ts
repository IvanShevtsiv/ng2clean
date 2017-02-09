import { TestBed, async, inject } from '@angular/core/testing';
import { Appointment } from './appointment';
import { AppointmentDataService } from './appointment-data.service';
import { Observable } from 'rxjs/Observable';

describe('AppointmentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentDataService]
    });
  });

  it('should ...', inject([AppointmentDataService], (service: AppointmentDataService): void => {
    expect(service).toBeTruthy();
  }));
});
