import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { MockActivatedRoute, MockRouter } from '../../shared/mocks/routes';
import { AppointmentEditComponent } from './appointment-edit.component';
import { AppointmentDataMockService } from '../../shared/mocks/appointment/appointment-data-mock.service';
import { AppointmentDataService } from '../appointment-data.service';
import { AppointmentResolver } from '../appointment.resolve';

describe('AppointmentEditComponent', () => {
  let appointmentDataMockService: AppointmentDataMockService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  let component: AppointmentEditComponent;
  let fixture: ComponentFixture<AppointmentEditComponent>;

  beforeEach(async(() => {
    appointmentDataMockService = new AppointmentDataMockService();
    mockActivatedRoute = new MockActivatedRoute(
      {'id': '0'},
      {'appointment': [{id: 0, patientId: 1, providerId: 2, description: 'descr', startDate: '01-01-1992', endDate: '12-12-1993'}]}
    );
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        AppointmentEditComponent
      ],
      imports: [
        AutoCompleteModule,
        CalendarModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: AppointmentDataService, useValue: appointmentDataMockService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter},
        AppointmentResolver
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
