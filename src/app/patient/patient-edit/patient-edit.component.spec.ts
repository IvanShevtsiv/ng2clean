import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { MockActivatedRoute, MockRouter } from '../../shared/mocks/routes';
import { PatientEditComponent } from './patient-edit.component';
import { PatientDataMockService } from '../../shared/mocks/patient/patient-data-mock.service';
import { PatientDataService } from '../patient-data.service';
import { PatientResolver } from '../patient.resolve';

describe('PatientEditComponent', () => {
  let patientDataMockService: PatientDataMockService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  let component: PatientEditComponent;
  let fixture: ComponentFixture<PatientEditComponent>;

  beforeEach(async(() => {
    patientDataMockService = new PatientDataMockService();
    mockActivatedRoute = new MockActivatedRoute(
      {'id': '0'},
      {'patient': [{id: 0, firstName: 'name', lastName: 'last', provider: 'Allergist',  description: 'descr',
        address: 'city', phone: '0365412394', email: 'dfgdf@goo.com', dob: '08-02-1992'}]}
      );
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        PatientEditComponent
      ],
      imports: [
        AutoCompleteModule,
        CalendarModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: PatientDataService, useValue: patientDataMockService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter},
        PatientResolver
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
