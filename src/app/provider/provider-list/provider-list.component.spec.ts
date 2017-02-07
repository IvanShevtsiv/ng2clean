/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { MockRouter, MockActivatedRoute } from '../../shared/mocks/routes';
import { ProviderDataMockService } from '../../shared/mocks/provider/provider-data-mock.service';
import { ProviderListComponent } from './provider-list.component';
import { ProviderDataService } from '../provider-data.service';
import { ProviderResolver } from '../provider.resolve';

describe('ProviderListComponent', () => {
  let providerDataMockService: ProviderDataMockService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  let component: ProviderListComponent;
  let fixture: ComponentFixture<ProviderListComponent>;

  beforeEach(async(() => {
    providerDataMockService = new ProviderDataMockService();
    mockActivatedRoute = new MockActivatedRoute();
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        ProviderListComponent
      ],
      imports: [
        RouterModule
      ],
      providers: [
        {provide: ProviderDataService, useValue: providerDataMockService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ProviderResolver
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
