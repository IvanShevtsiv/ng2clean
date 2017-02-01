import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Person } from '../person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit, OnDestroy {
  personForm: FormGroup;
  person: Person;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private personDataService: PersonDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => this.person = data['person']);
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.person.id) {
      this.personDataService.updatePersonById(this.person.id, this.personForm.value);
    } else {
      this.personDataService.addPerson(this.personForm.value);
    }
    console.log(this.personForm);
    this.router.navigate(['/home']);
  }

  private initForm(): void {
    if (!this.person) {
      this.person = new Person();
    }

    const now = new Date();

    this.personForm = this.formBuilder.group({
      firstName: [this.person.firstName, [Validators.required]],
      lastName: [this.person.lastName, Validators.required],
      dob: [this.person.dob, Validators.required]
    });
  }
}
