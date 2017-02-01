import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonEditComponent } from './person-edit.component';
import {PersonDataService} from '../person-data.service';

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ PersonDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
