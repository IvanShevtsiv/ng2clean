import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Provider } from '../provider';
import { ProviderDataService } from '../provider-data.service';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.scss']
})
export class ProviderEditComponent implements OnInit, OnDestroy {
  providerForm: FormGroup;
  provider: Provider;
  private subscription: Subscription;
  positions: string[] = [
    'Allergist',
    'Anesthesiologist',
    'Cardiologist',
    'Dentist',
    'Dermatologist',
    'Gynecologist',
    'Neurologist',
    'Oncologist',
    'Orthopedic Surgeon',
    'Plastic Surgeon',
    'Urologist'
  ];
  filteredPositions: any[];
  position: string;

  constructor(private formBuilder: FormBuilder,
              private providerDataService: ProviderDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => this.provider = data['provider']);
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.provider.id) {
      this.providerDataService.updateProviderById(this.provider.id, this.providerForm.value);
    } else {
      this.providerDataService.addProvider(this.providerForm.value);
    }
    console.log(this.providerForm);
    this.router.navigate(['/providers']);
  }

  filterRoles(event) {
    this.filteredPositions = [];
    for (let i = 0; i < this.positions.length; i++) {
      const role = this.positions[i];
      if (role.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredPositions.push(role);
      }
    }
  }

  handleDropdownClick() {
    this.filteredPositions = [];
    setTimeout(() => {
      this.filteredPositions = this.positions;
    });
  }

  private initForm(): void {
    if (!this.provider) {
      this.provider = new Provider();
    }

    this.providerForm = this.formBuilder.group({
      firstName: [this.provider.firstName, [Validators.required]],
      lastName: [this.provider.lastName, Validators.required],
      position: [this.provider.position, Validators.required],
      email: [this.provider.email, Validators.required]
    });
  }
}
