/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';

import { MockRouter, MockActivatedRoute } from '../../shared/mocks/routes';
import { ProviderEditComponent } from './provider-edit.component';
import { ProviderDataMockService } from '../../shared/mocks/provider/provider-data-mock.service';
import { ProviderDataService } from '../provider-data.service';

describe('ProviderEditComponent', () => {
  let providerDataMockService: ProviderDataMockService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  let component: ProviderEditComponent;
  let fixture: ComponentFixture<ProviderEditComponent>;

  beforeEach(async(() => {
    providerDataMockService = new ProviderDataMockService();
    mockActivatedRoute = new MockActivatedRoute(
      {'id': '0'},
      {'provider': [{id: 0, firstName: 'dfgdf', lastName: 'kgjg', email: 'dfgdf@goo.com', position: 'Allergist'}]}
      );
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        ProviderEditComponent
      ],
      imports: [
        AutoCompleteModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: ProviderDataService, useValue: providerDataMockService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
